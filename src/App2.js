// Implementing the state queue yourself

function getFinalState(baseState, queue) {
  let finalState = baseState;

  // TODO: do something with the queue...

  for (let update of queue) {
    if (typeof update === "function") {
      // TODO: apply the updater function
      finalState = update(finalState);
    } else {
      // TODO: replace the state
      finalState = update;
    }
  }

  return finalState;
}

////////////////////////////////////////

function increment(n) {
  return n + 1;
}
increment.toString = () => "n => n+1";

export default function App() {
  return (
    <>
      <TestCase baseState={0} queue={[1, 1, 1]} expected={1} />
      <hr />
      <TestCase
        baseState={0}
        queue={[increment, increment, increment]}
        expected={3}
      />
      <hr />
      <TestCase baseState={0} queue={[5, increment]} expected={6} />
      <hr />
      <TestCase baseState={0} queue={[5, increment, 42]} expected={42} />
      <hr />
      <TestCase baseState={0} queue={[5, increment, increment]} expected={7} />
      <hr />
      <TestCase baseState={0} queue={[5, 5]} expected={5} />
      <hr />
      <TestCase
        baseState={0}
        queue={[5, increment, 7, increment]}
        expected={8}
      />
    </>
  );
}

function TestCase({ baseState, queue, expected }) {
  const actual = getFinalState(baseState, queue);
  // console.log(actual);
  console.log(getFinalState(0, [increment, 42]));
  return (
    <>
      <p>
        Base state: <b>{baseState}</b>
      </p>
      <p>
        Queue: <b>[{queue.join(", ")}]</b>
      </p>
      <p>
        Expected result: <b>{expected}</b>
      </p>
      <p
        style={{
          color: actual === expected ? "green" : "red",
        }}
      >
        Your result: <b>{actual}</b> (
        {actual === expected ? "correct" : "wrong"})
      </p>
    </>
  );
}
