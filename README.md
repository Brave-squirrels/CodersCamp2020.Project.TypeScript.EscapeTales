# CodersCamp2020.Project.TypeScript.Her

Projekt nr 3 w VI edycji kursu programowania CodersCamp 2020.

W projekcie każdy z uczestników powinien zaprezentować praktyczną znajomość poniższych zagadnień związanych z TypeScript:

```
typy podstawowe
definiowanie własnych typów
składanie typów
typy / klasy / interfejsy
implementacja / dziedziczenie / kompozycja / implementacja interfejsu
modyfikatory dostępu
typy generyczne
testy jednostkowe i TDD
```

## Tablica z zadaniami

Wszystkie taski dotyczące projektu można znaleźć na tablicy [Trello](https://trello.com/b/HzFTZcYy/project-3-typescript-her).

## Praca z projektem

### Commit Message

Przyjmujemy poniższy format commit message

```
<type>: <commit_message>
```

#### Commit Message Type

- **build**: Zmiana która afektuje budowanie projektu lub zależności zewnętrzne
- **docs**: Zmiana w dokumentacji bądź dodatkowych materiałach
- **feature**: Wprowadzenie nowej funkcjonalności
- **bugfix**: Naprawienie błędu
- **refactor**: Zmiana w projekcie, która nic nie naprawia, ani nie dodaje

#### Zasady Commit Message

- używaj imperatywnej formy czasu teraźniejszego: "change", nie "changed" lub "changes"
- nie zaczynaj wielką literą
- nie dodawaj kropki na końcu zdania
- używaj języka angielskiego
- sformatuj kod (skrót ctrl+shift+F)

### Pull Request

Pracujemy na gałęziach w metodologii `branch per feature`.
Staramy się tworzyć małe PR. W opisie PR powinno być dokładnie opisane
co on zmienia. Każdy PR musi być zaakceptowany przez przynajmniej jedną
inną osobę.

### Zasady BEM:

- korzystamy z założenia (na ile jest to możliwe) **.block\_\_element--modifier**
- **.block** nazwa danego bloku
- **\_\_element** dodajemy dla elemtnu w bloku (nie mnożymy elementów - czyli nie robimy **.block**element1**element2**, co do tego znalazłem różne informacje, ale podstawa to logicznie to rozwiązać. Tak, żeby każdy wiedział o co chodzi np. **.block\_\_element2**)
- **--modifier** dodajemy jak chcemy w jakiś specyficzny sposób zmodyfikować element
- nie powinno się dziedziczyć w cssie blokami i elementami (nie robi się _.block1 .block2 {}_)
- modyfikator może dziedziczyć po bloku i elemencie
- [link](http://getbem.com/naming/) do dokumentacji, bo sam nie wiem czy to wszystko dobrze załapałem:

## Bundler:

- npm-install - indstalujemy wszystkie moduły
- npm run dev - włączamy serwer deweloperski
- npm run build - build projektu
- npm run test - odpalanie testów
- npm run testAll - odpalanie testów w trybie watch
