interface ApiResponse<T> {
  status: number;
  data: T;
}

const apiResponse: ApiResponse<string> = {
  status: 200,
  data: 'Hello',
};

interface Student {
  id: number;
  name: string;
  age: number;
}

const student: ApiResponse<Student> = {
  status: 200,
  data: {
    id: 1,
    name: 'v1',
    age: 22,
  },
};

export {};
