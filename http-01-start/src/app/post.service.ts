import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Post } from './post.model';
import { map, catchError } from 'rxjs/operators'
import { Subject, throwError } from 'rxjs';

@Injectable({
    providedIn: "root"
})
export class PostService {
    dbUrl: string = 'https://ng-project-ab3d2.firebaseio.com/posts.json';

    error = new Subject<string>();

    constructor(private http: HttpClient) { }

    createAndFetchPost(title: string, content: string) {
        // Send Http request
        const postData: Post = { title: title, content: content };
        this.http
            .post<{ name: string }>(
                this.dbUrl,
                postData
            )
            .subscribe(responseData => {
                console.log(responseData);
            }, error => {
                this.error.next(error.message);
            });
    }

    fetchPosts() {
        
        return this.http.get<{ [key: string]: Post }>(this.dbUrl,
            {
                headers: new HttpHeaders({ 'custom-header': 'test'}),
                params: new HttpParams().set('custom-param', 'allowed')
            })
            .pipe(map(responseData => {
                const postArray: Post[] = [];
                for (let key in responseData) {
                    if (responseData.hasOwnProperty(key)) {
                        postArray.push({ ...responseData[key], id: key })
                    }
                }
                return postArray;
            }),
                catchError(errorRes => {
                    return throwError(errorRes);
                })
            );

    }

    deletePosts() {
        return this.http.delete(this.dbUrl);
    }

}