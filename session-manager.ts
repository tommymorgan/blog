import { User } from './user-model';
import { AuthService } from './auth-service';

export class SessionManager {
  private authService = new AuthService();
  private currentUser: User | null = null;

  async createSession(email: string, password: string) {
    this.currentUser = await this.authService.login(email, password);
    return this.currentUser;
  }

  getSession(): User | null {
    return this.currentUser;
  }
}
