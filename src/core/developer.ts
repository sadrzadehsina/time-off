import create from "zustand";
import { produce } from "immer";

interface Developer {
	firstName: string;
	lastName: string;
	avatar: string;
	level: string;
	email: string;
	mobile: string;
}

interface Timeoff {
	from: Date;
	to: Date;
}

interface DeveloperStore {
	profile: Developer;
	hourlyTimeoffs: Timeoff[];
	dailyTimeoffs: Timeoff[];
	addHourlyTimeoff: ({ from, to }: Timeoff) => void;
	addDailyTimeoff: ({ from, to }: Timeoff) => void;
}

const makeDeveloper = ({
	firstName,
	lastName,
	avatar,
	level,
	email,
	mobile,
}: Developer): Developer => {
	return {
		firstName,
		lastName,
		avatar,
		level,
		email,
		mobile,
	};
};

const fullName = (developer: Developer) => {
	return `${developer.firstName} ${developer.lastName}`;
};

const useDeveloper = create<DeveloperStore>()((set, get) => ({
	profile: {
		firstName: "",
		lastName: "",
		avatar: "",
		level: "",
		email: "",
		mobile: "",
	},

	hourlyTimeoffs: [],

	dailyTimeoffs: [],

	addHourlyTimeoff: ({ from, to }) => {},

	addDailyTimeoff: ({ from, to }) => {},
}));

export { makeDeveloper, fullName };
export type { Developer };
