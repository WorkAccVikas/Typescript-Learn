class ApiService {
  protected baseUrl = '/api';
  protected city = 'mumbai';
}

class UserService extends ApiService {
  protected override baseUrl = '/api/users'; // wrong
  //   protected override baseUrl = '/api/users'; // correct

  protected city = 'goa';
}

export {};
