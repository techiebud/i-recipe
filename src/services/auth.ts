import firebase from 'firebase';
export class AuthService {

    signUp(email: string, password: string) {

         return firebase.auth().createUserWithEmailAndPassword(email, password);

    }

    signIn(email: string, password: string) {

        return firebase.auth().signInWithEmailAndPassword(email, password);
    }

    logout() {
        firebase.auth().signOut();
    }

    getActiveUser() {

         return firebase.auth().currentUser;
    }

}