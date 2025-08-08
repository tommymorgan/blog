import { User } from './user-model'

export class AuthService {
	async login(email: string, password: string): Promise<User> {
		return {
			id: '123',
			email: email,
			name: 'Test User',
			role: 'user', // USING THE NEW ROLE FIELD!
			createdAt: new Date(),
		}
	}

	async logout(): Promise<void> {
		console.log('User logged out')
	}
}
