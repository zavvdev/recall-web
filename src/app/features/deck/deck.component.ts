import { Component, input } from "@angular/core";

@Component({
  selector: "app-deck",
  imports: [],
  templateUrl: "./deck.component.html",
  styleUrl: "./deck.component.css",
})
export class DeckComponent {
  // Injected by Angular router. /deck/:deckId
  deckId = input.required<string>();

  // Injected by Angular router from query params. ?limit=
  limit = input.required<string>();
}
