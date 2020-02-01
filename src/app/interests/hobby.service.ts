import { EventEmitter } from '@angular/core';
import { Hobby } from './hobby.model';

export class HobbyService {
    onDisplay = new EventEmitter<number>();
    private hobbies: Hobby[] = [
        new Hobby("Sports", "https://picsum.photos/id/770/3000/2000",
        "Cricket is one of the most interesting games to watch and play in its T20 format",
        "I like to watch Wimbledon and other tennis tournaments too. Roger Federer and Sachin are some of my favourite Sport players"
        ),
        new Hobby("Movies", "https://picsum.photos/id/415/5184/3456",
        "Movies is not just for entertainment, it can be a stressbuster. I like watching Adevnuture, Action and Historical Drama films",
        "Some of my favourite films series include Avengers, Matrix etc"
        ),
        new Hobby("Places", "https://picsum.photos/id/323/3831/2554",
        "I try to travel frequently. Travelling helps me develop a wider world view by exploring different cultures",
        "Some of the places which I recently visited include NewYork, Niagara, GrandCanyon"
        ),
        new Hobby("Music", "https://picsum.photos/id/334/2304/1536",
        "I enjoy listening music regularly. Types of Music which I like include Classical, Jazz, Rock",
        "I like playing guitar & playing piano too"
        ),
    ];

    getHobbies() {
        return this.hobbies.slice();
    }

    getHobby(index) {
        return this.hobbies.slice()[index];
    }   

}