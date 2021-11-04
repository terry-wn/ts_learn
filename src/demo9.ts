// nodejs BFF架构模式
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
  tick(): void;
}
class DigitalClock implements ClockInterface {
  public tick(): void {
    console.log("ddd");
  }
}
class AnalogClock implements ClockInterface {
  public tick(): void {
    console.log("aaa");
  }
}
function createClock(
  ctor: ClockConstructor,
  hour: number,
  minute: number
): ClockInterface {
  return new ctor(hour, minute);
}
const digital = createClock(DigitalClock, 23, 54);
const analog = createClock(AnalogClock, 11, 22);
digital.tick();
analog.tick();
