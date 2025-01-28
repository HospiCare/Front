import axios, { AxiosError, AxiosRequestHeaders } from 'axios';
import { UserAccount } from '../user-account';


export class ApiServiceClient {
  private baseUrl = 'http://127.0.0.1:8000';
  public auth_token: string = '';
  public user_data: UserAccount = {} as UserAccount;

  constructor() {
    const storedToken: string | null = localStorage.getItem('auth_token');
    if (storedToken) {
      this.auth_token = storedToken;
    }

    const storedUserData = localStorage.getItem('user_data');
    if (storedUserData) {
      this.user_data = JSON.parse(storedUserData) as UserAccount;
    }
  }

  private getHeaders(): any {
    if (this.auth_token) {
      return {
        'Content-Type': 'application/json',
        'Authorization': `Token ${this.auth_token}`
      };
    }
    throw new Error('Authorization token is missing.');
  }

  private handleError(error: AxiosError): never {
    let errorMessage = 'Unknown error!';
    if (error.response) {
      errorMessage = `Error Code: ${error.response.status}\nMessage: ${error.response.data}`;
    } else if (error.request) {
      errorMessage = 'No response received from server.';
    } else {
      errorMessage = `Error: ${error.message}`;
    }
    console.error(errorMessage);
    throw new Error(errorMessage);
  }

  async get<T>(endpoint: string, query: string=""): Promise<T> {
    try {
      const response = await axios.get<T>(`${this.baseUrl}/${endpoint}/?${query}`, {
        headers: this.getHeaders(),
      });
      return response.data;
    } catch (error) {
      this.handleError(error as AxiosError);
    }
  }

  async post<T>(endpoint: string, data: any): Promise<T> {
    try {
      const response = await axios.post<T>(`${this.baseUrl}/${endpoint}/`, data, {
        headers: this.getHeaders(),
      });
      return response.data;
    } catch (error) {
      this.handleError(error as AxiosError);
    }
  }

  async put<T>(endpoint: string, data: any): Promise<T> {
    try {
      const response = await axios.put<T>(`${this.baseUrl}/${endpoint}/`, data, {
        headers: this.getHeaders(),
      });
      return response.data;
    } catch (error) {
      this.handleError(error as AxiosError);
    }
  }

  async delete<T>(endpoint: string): Promise<T> {
    try {
      const response = await axios.delete<T>(`${this.baseUrl}/${endpoint}/`, {
        headers: this.getHeaders(),
      });
      return response.data;
    } catch (error) {
      this.handleError(error as AxiosError);
    }
  }

  async login(email: string, password: string): Promise<UserAccount> {
    const endpoint = 'user/login';
    const data = { email, password };

    try {
      const response = await axios.post<{ token: string; user: any }>(`${this.baseUrl}/${endpoint}/`, data);

      this.auth_token = response.data.token;
      this.user_data = response.data.user as UserAccount;
      localStorage.setItem('auth_token', this.auth_token);
      localStorage.setItem('user_data', JSON.stringify(this.user_data));
      return this.user_data;
    } catch (error) {
      this.handleError(error as AxiosError);
    }
  }

  async logout(): Promise<void> {
    const endpoint = 'user/logout';

    try {
      await axios.get(`${this.baseUrl}/${endpoint}/`, {
        headers: this.getHeaders(),
      });

      localStorage.removeItem('auth_token');
      localStorage.removeItem('user_data');
      this.auth_token = '';
    } catch (error) {
      this.handleError(error as AxiosError);
    }
  }

  isLoggedIn(): boolean {
    if (this.auth_token) {
      return true;
    }
    return false;
  }

}

export const apiClient = new ApiServiceClient();
