import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/core/models/article';
import { ArticleService } from 'src/app/core/services/article.service';

@Component({
  selector: 'app-article-share',
  templateUrl: './article-share.component.html',
  styleUrls: ['./article-share.component.scss']
})
export class ArticleShareComponent implements OnInit {

  constructor(private articleService: ArticleService) { }
  
  @Input() article: Article | undefined;
  
  ngOnInit(): void {
  }

  toggleFavorite(article: Article) {
    const isFavorited = article.favorited;
    let favOrNot$ = this.articleService.favoriteArticle(article.slug);
    if (isFavorited) {
      favOrNot$ = this.articleService.unfavoriteArticle(article.slug);
    }

    favOrNot$.subscribe((_article) => {
      article.favorited = _article.favorited;
    });
  }
}
