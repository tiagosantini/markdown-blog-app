import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MarkdownComponent, MarkdownModule } from 'ngx-markdown';
import { MatCardModule } from '@angular/material/card';

import { ShellComponent } from './core/shell/shell.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MarkdownComponent, MatCardModule, ShellComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'markdown-blog-app';
}
