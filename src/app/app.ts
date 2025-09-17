import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { AboutUs } from "./components/about-us/about-us";
import { StatCard } from './components/stat-card/stat-card';
import { NgClass } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { Modal } from "./components/modal/modal";



@Component({
  selector: 'app-root',
  imports: [Header, AboutUs, StatCard, FormsModule, Modal],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('dreamapp');
}
