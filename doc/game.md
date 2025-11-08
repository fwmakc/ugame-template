Класс Game - самый главный класс движка.

Он включает в себя несколько других классов:

- gameloop - для игрового цикла
- gamescenes - для управления игровыми сценами
- gamerender [* возможно, пока канвас] - для создания экрана

Эти классы закрыты и на текущий момент переопределить их невозможно.

Но, возможно, потом, через его субклассы или методы можно будет переопределять поведение движка.

Еще появится возможность управления настройками движка.

```
const game = new Game();
game.start();
```

Можно остановить игру:

```
game.stop();
```

Можно остановить игру с вызовом метода после остановки:

```
game.stop(() => {
  console.log('GAME OVER');
});
```

Можно переназначить метод цикла:

```
async function customLoopMethod(callback) {
  let infinite = true;
  let lastTime = performance.now();

  while (infinite) {
    const currentTime: number = performance.now();
    const deltaTime: number = (currentTime - lastTime) / 1000;

    lastTime = currentTime;

    try {
      infinite = await callback(deltaTime);
    } catch (error) {
      console.error('An error occurred in loop:', error);
      infinite = false;
    }
  }
};

game.setLoop(customLoopMethod);
```

Например, это может быть полезно, если вы запускаете игру в консоли или на устройстве, которое не поддерживает браузерный метод обновления **requestAnimationFrame**.

Управление сценами осуществляется через публичное свойство **scenes**. Оно открывает доступ к методам класса **ScenesManager**:

- add
- getByName
- remove
- removeAll
- removeByName
