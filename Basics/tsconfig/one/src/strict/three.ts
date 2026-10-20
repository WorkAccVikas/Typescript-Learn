// TOPIC : strictPropertyInitialization

class UserService {
  private apiUrl: string;

  constructor() {
    // ❌ Error: apiUrl is not initialized
  }
}

class UserService1 {
  private readonly apiUrl: string;

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }
}

const userService = new UserService1('/api/users');

export {};
