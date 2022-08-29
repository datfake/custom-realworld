import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { ArticleShareComponent } from './components/article/article-share.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BannerComponent, ArticleShareComponent],
  imports: [CommonModule, RouterModule],
  exports: [BannerComponent, ArticleShareComponent],
})
export class SharedModule {}
