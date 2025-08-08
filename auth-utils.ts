import { User } from './user-model';
import { SessionManager } from './session-manager';

export class AuthorizationUtils {
  constructor(private sessionManager: SessionManager) {}

  isAdmin(): boolean {
    const user = this.sessionManager.getSession();
    return user?.role === 'admin';
  }

  canEdit(): boolean {
    const user = this.sessionManager.getSession();
    return user?.role === 'admin' || user?.role === 'user';
  }

  canView(): boolean {
    const user = this.sessionManager.getSession();
    return user !== null;  // Any logged-in user can view
  }
}
