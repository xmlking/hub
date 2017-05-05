import { ExceptionFilter, Catch } from 'nest.js';
import { UsersService } from './users.service';

export class CustomException {}

@Catch(CustomException)
export class CustomExceptionFilter implements ExceptionFilter {
    public catch(exception, response) {
        response.status(500).json({
            message: 'Custom exception message.',
        });
    }
}
