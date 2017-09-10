import {Component} from '@angular/core';
import {Article} from './Article';
@Component({
selector: 'votes-app',
templateUrl: './votes.component.html',
styleUrls:['./votes.component.css']
})

export class VotesComponent {
title: string="Votos";
articles: Article[];

constructor(){
    this.articles =[
        new Article ('Angular2', 'http://angular.io', 30),
        new Article ('Google', 'http://google.com', 20),
        new Article ('Erick Rayo', 'http://erickrayo.com', 31)
    ];
}
addArticle(title: HTMLInputElement, link: HTMLInputElement ):boolean{
    this.articles.push(
        new Article (title.value, link.value)
    );
    title.value="";
    link.value="";
    return false;

}
    sortedArticles(): Article[]{
        return this.articles.sort((a: Article, b:Article) =>b.votes-a.votes);
    }
}