import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';
import { toast } from "react-toastify";


export const login = createAsyncThunk('auth/login', async ({ username, password }: { username: string, password: string }, thunkAPI) => {
	try {
		const response = await fetch('http://127.0.0.1:8000/auth/token/', {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: username,
				password: password,
			}),
		});

		const data = await response.json();

		if (response.status === 200) {
			toast.success("Login successfull!")
			return data;

		} else {
			toast.error(data["detail"])
			return thunkAPI.rejectWithValue(data);
		}
	} catch (err) {
		if (err instanceof Error) {
			toast.error("Something went wrong!")
			return thunkAPI.rejectWithValue(err);
		}

	}
});

export const register = createAsyncThunk('auth/register', async ({ username, password }: { username: string, password: string }, thunkAPI) => {
	try {
		const response = await fetch('http://127.0.0.1:8000/auth/', {
			method: 'POST',
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: username,
				password: password,
			}),
		});

		const data = await response.json();

		if (response.status === 200) {
			toast.success("User created!")
			return data;

		} else {
			toast.error(data[0])
			return thunkAPI.rejectWithValue(data);
		}
	} catch (err) {
		if (err instanceof Error) {
			return thunkAPI.rejectWithValue(err);
		}

	}
});

export const getTouranment = createAsyncThunk('tournament', async (_, thunkAPI) => {
	try {
		const response = await fetch('http://127.0.0.1:8000/tournament', {
			method: 'GET',
			headers: {
				"Content-Type": "application/json",
			},
		});

		const data = await response.json();

		if (response.status === 200) {
			return data;

		} else {
			return thunkAPI.rejectWithValue(data);
		}
	} catch (err) {
		if (err instanceof Error) {
			return thunkAPI.rejectWithValue(err);
		}

	}
});

export const getTeams = createAsyncThunk('teams', async (tournId : string, thunkAPI) => {
	
	try {
		const response = await fetch(`http://127.0.0.1:8000/tournament/${tournId}`, {
			method: 'GET',
			headers: {
				"Content-Type": "application/json",
			},
		});

		const data = await response.json();

		if (response.status === 200) {
			return data;

		} else {
			return thunkAPI.rejectWithValue(data);
		}
	} catch (err) {
		if (err instanceof Error) {
			return thunkAPI.rejectWithValue(err);
		}

	}
});


interface CounterState {
	isAuthenticated: boolean,
	user: null | any,
	loading: boolean,
	registered: boolean,
}

const initialState = {
	isAuthenticated: localStorage.getItem("authTokens") ? true: null,
	user: localStorage.getItem("authTokens")
	? jwtDecode(localStorage.getItem("authTokens")!)
	: null,
	loading: false,
	registered: false,
} as CounterState

const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		resetRegistered: state => {
			state.registered = false
		},
		logoutUser: state => {
			state.isAuthenticated = false;
			state.user = null;
		},

	},
	extraReducers: builder => {
		builder
			.addCase(register.pending, state => {
				state.loading = true;
			})
			.addCase(register.fulfilled, state => {
				state.loading = false;
				state.registered = true;
			})
			.addCase(register.rejected, state => {
				state.loading = false;
			})
			.addCase(login.pending, state => {
				state.loading = true;
			})
			.addCase(login.fulfilled, (state, payload) => {
				state.loading = false;
				state.isAuthenticated = true;
				state.user = jwtDecode(payload.payload.access)
				localStorage.setItem("authTokens", JSON.stringify(payload.payload));
			})
			.addCase(login.rejected, state => {
				state.loading = false;
			})
		// .addCase(getUser.pending, state => {
		// 	state.loading = true;
		// })
		// .addCase(getUser.fulfilled, (state, action) => {
		// 	state.loading = false;
		// 	state.user = action.payload;
		// })
		// .addCase(getUser.rejected, state => {
		// 	state.loading = false;
		// })
		// .addCase(checkAuth.pending, state => {
		// 	state.loading = true;
		// })
		// .addCase(checkAuth.fulfilled, state => {
		// 	state.loading = false;
		// 	state.isAuthenticated = true;
		// })
		// .addCase(checkAuth.rejected, state => {
		// 	state.loading = false;
		// })
		// .addCase(logout.pending, state => {
		// 	state.loading = true;
		// })
		// .addCase(logout.fulfilled, state => {
		// 	state.loading = false;
		// 	state.isAuthenticated = false;
		// 	state.user = null;
		// })
		// .addCase(logout.rejected, state => {
		// 	state.loading = false;
		// });
	},
});

interface TeamModel {
	id: number 
	name: string,
	photo_img: string
}

interface Tourna {
	loading: boolean,
	tournaments: TeamModel[]
}

const TournaState = {
	loading: false,
	tournaments: [],
} as Tourna

interface PerTeam {
	loading: boolean,
	teams: TeamModel[]
}

const TeamState = {
	loading: false,
	teams: [],
} as PerTeam

export const TournSlice = createSlice({
	name: 'Tournament',
	initialState: TournaState,
	reducers: {

	},
	extraReducers(builder) {
		builder
			.addCase(getTouranment.pending, state => {
				state.loading = true;
			})
			.addCase(getTouranment.fulfilled, (state, action) => {
				state.loading = false;
				state.tournaments = action.payload;
			})
			.addCase(getTouranment.rejected, state => {
				state.loading = false;
			})
	},
});

export const TeamsSlice = createSlice({
	name: 'Teams',
	initialState: TeamState,
	reducers: {
	},
	extraReducers(builder) {
		builder
			.addCase(getTeams.pending, state => {
				state.loading = true;
			})
			.addCase(getTeams.fulfilled, (state, action) => {
				state.loading = false;
				state.teams = action.payload;
			})
			.addCase(getTeams.rejected, state => {
				state.loading = false;
			})
	},
});

export const { resetRegistered, logoutUser } = userSlice.actions
export default userSlice.reducer