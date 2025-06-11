import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { map, Observable } from 'rxjs';
import { User } from '../entity/user.interface';
import { UserService } from '../port/user.service';

@Injectable()
export class UserFirebaseService implements UserService {
  readonly #http = inject(HttpClient);
  readonly #FIRESTORE_URL = `https://firestore.googleapis.com/v1/projects/${environment.firebaseConfig.projectId}/databases/(default)/documents`;
  readonly #USER_COLLECTION_ID = 'users';
  readonly #FIREBASE_API_KEY = environment.firebaseConfig.apiKey;

  create(user: User, bearerToken: string): Observable<void> {
    const url = `${this.#FIRESTORE_URL}/${this.#USER_COLLECTION_ID}?documentId=${user.id}&key=${this.#FIREBASE_API_KEY}`;
    const body = {
      fields: {
        name: { stringValue: user.name },
        email: { stringValue: user.email },
      },
    };
    const headers = new HttpHeaders({
      Authorization: `Bearer ${bearerToken}`,
    });
    const options = { headers };
    return this.#http.post(url, body, options).pipe(
      map(() => void 0), // Transforme la réponse en void
    );
  }

  fetch(userId: string, bearerToken: string): Observable<User> {
    const url = `${this.#FIRESTORE_URL}/${this.#USER_COLLECTION_ID}/${userId}?key=${this.#FIREBASE_API_KEY}`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${bearerToken}`,
    });
    const options = { headers };

    return this.#http.get(url, options).pipe(
      map((response: any) => ({
        id: userId,
        name: response.fields.name.stringValue,
        email: response.fields.email.stringValue,
      })),
    );
  }
}
