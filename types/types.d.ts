type User = {
	id: number;
	name: string;
	surname: string;
	email: string;
	photo_path: string;
	status: string;
	about: string;
} | null

interface ErrorResponse {
	statusCode: number;
	message: string;
	code: string
	error: string
}