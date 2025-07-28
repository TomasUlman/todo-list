# 📝 ToDo List

Jednoduchá osobní aplikace pro správu úkolů. Projekt slouží jako praktické procvičení práce s Reactem, komponentovým návrhem a správou stavu v rámci malého, ale funkčního projektu.

## 🚀 Live demo
[https://tomasulman-todolist.netlify.app/](https://tomasulman-todolist.netlify.app/)

## 🧩 Funkce
- Přidávání, editace a mazání úkolů
- Každý úkol může obsahovat:
  - Název
  - Poznámku
  - Termín dokončení (volitelné datum)
- Zaškrtávací políčko pro označení dokončení
- Upozornění na prošlé úkoly (červené zvýraznění)
- Využití `localStorage` pro uchování dat mezi relacemi
- Interaktivní UI s přepínáním formulářů a přehledným seznamem
- Responzivní design s vlastním jednoduchým stylem

## 🛠 Použité technologie
- React (CRA)
- Čisté CSS
- `useState`, `useEffect`
- `localStorage`
- Komponentový návrh

## 📦 Lokální spuštění

```bash
git clone https://github.com/your-username/todo-list.git
cd todo-list
npm install
npm start
```

## 📄 Poznámky
- Všechna data jsou uložena pouze v prohlížeči (localStorage)
- Nejsou potřeba žádné API klíče nebo backend
- Úkoly jsou identifikovány pomocí `crypto.randomUUID()`

---

© 2025 Tomáš Ulman. Osobní projekt.
