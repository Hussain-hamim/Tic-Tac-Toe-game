import React, { useRef } from "react";

const App3 = () => {
  const one = useRef(null);

  function scroll() {
    one.current.scrollIntoView({
      //
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  return (
    <>
      <button onClick={scroll}>scroll</button>

      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci autem
        qui vitae est voluptate perspiciatis totam reiciendis commodi iusto
        deserunt, consequuntur reprehenderit dignissimos, neque suscipit eum
        quisquam omnis. Suscipit, at. Earum quod totam culpa, ullam et
        accusamus. Ab inventore repellendus nihil. Numquam, laudantium sint
        corporis laboriosam, quis dolor, necessitatibus excepturi saepe eos
        reiciendis molestiae quos aspernatur error a. Vel expedita nostrum ut
        aspernatur magni reiciendis atque hic possimus totam aliquid. Tempora
        incidunt eum ex similique. Blanditiis eos corporis, dolorem enim
        cupiditate suscipit, saepe repellat magni voluptatum et consequuntur
        assumenda nostrum nemo, commodi sapiente eveniet sunt impedit. Ipsa
        sapiente at iusto?
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci autem
        qui vitae est voluptate perspiciatis totam reiciendis commodi iusto
        deserunt, consequuntur reprehenderit dignissimos, neque suscipit eum
        quisquam omnis. Suscipit, at. Earum quod totam culpa, ullam et
        accusamus. Ab inventore repellendus nihil. Numquam, laudantium sint
        corporis laboriosam, quis dolor, necessitatibus excepturi saepe eos
        reiciendis molestiae quos aspernatur error a. Vel expedita nostrum ut
        aspernatur magni reiciendis atque hic possimus totam aliquid. Tempora
        incidunt eum ex similique. Blanditiis eos corporis, dolorem enim
        cupiditate suscipit, saepe repellat magni voluptatum et consequuntur
        assumenda nostrum nemo, commodi sapiente eveniet sunt impedit. Ipsa
        sapiente at iusto?
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci autem
        qui vitae est voluptate perspiciatis totam reiciendis commodi iusto
        deserunt, consequuntur reprehenderit dignissimos, neque suscipit eum
        quisquam omnis. Suscipit, at. Earum quod totam culpa, ullam et
        accusamus. Ab inventore repellendus nihil. Numquam, laudantium sint
        corporis laboriosam, quis dolor, necessitatibus excepturi saepe eos
        reiciendis molestiae quos aspernatur error a. Vel expedita nostrum ut
        aspernatur magni reiciendis atque hic possimus totam aliquid. Tempora
        incidunt eum ex similique. Blanditiis eos corporis, dolorem enim
        cupiditate suscipit, saepe repellat magni voluptatum et consequuntur
        assumenda nostrum nemo, commodi sapiente eveniet sunt impedit. Ipsa
        sapiente at iusto?
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci autem
        qui vitae est voluptate perspiciatis totam reiciendis commodi iusto
        deserunt, consequuntur reprehenderit dignissimos, neque suscipit eum
        quisquam omnis. Suscipit, at. Earum quod totam culpa, ullam et
        accusamus. Ab inventore repellendus nihil. Numquam, laudantium sint
        corporis laboriosam, quis dolor, necessitatibus excepturi saepe eos
        reiciendis molestiae quos aspernatur error a. Vel expedita nostrum ut
        aspernatur magni reiciendis atque hic possimus totam aliquid. Tempora
        incidunt eum ex similique. Blanditiis eos corporis, dolorem enim
        cupiditate suscipit, saepe repellat magni voluptatum et consequuntur
        assumenda nostrum nemo, commodi sapiente eveniet sunt impedit. Ipsa
        sapiente at iusto?
      </div>
      <div style={{ color: "orchid" }} ref={one}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci autem
        qui vitae est voluptate perspiciatis totam reiciendis commodi iusto
        deserunt, consequuntur reprehenderit dignissimos, neque suscipit eum
        quisquam omnis. Suscipit, at. Earum quod totam culpa, ullam et
        accusamus. Ab inventore repellendus nihil. Numquam, laudantium sint
        corporis laboriosam, quis dolor, necessitatibus excepturi saepe eos
        reiciendis molestiae quos aspernatur error a. Vel expedita nostrum ut
        aspernatur magni reiciendis atque hic possimus totam aliquid. Tempora
        incidunt eum ex similique. Blanditiis eos corporis, dolorem enim
        cupiditate suscipit, saepe repellat magni voluptatum et consequuntur
        assumenda nostrum nemo, commodi sapiente eveniet sunt impedit. Ipsa
        sapiente at iusto?
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci autem
        qui vitae est voluptate perspiciatis totam reiciendis commodi iusto
        deserunt, consequuntur reprehenderit dignissimos, neque suscipit eum
        quisquam omnis. Suscipit, at. Earum quod totam culpa, ullam et
        accusamus. Ab inventore repellendus nihil. Numquam, laudantium sint
        corporis laboriosam, quis dolor, necessitatibus excepturi saepe eos
        reiciendis molestiae quos aspernatur error a. Vel expedita nostrum ut
        aspernatur magni reiciendis atque hic possimus totam aliquid. Tempora
        incidunt eum ex similique. Blanditiis eos corporis, dolorem enim
        cupiditate suscipit, saepe repellat magni voluptatum et consequuntur
        assumenda nostrum nemo, commodi sapiente eveniet sunt impedit. Ipsa
        sapiente at iusto?
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci autem
        qui vitae est voluptate perspiciatis totam reiciendis commodi iusto
        deserunt, consequuntur reprehenderit dignissimos, neque suscipit eum
        quisquam omnis. Suscipit, at. Earum quod totam culpa, ullam et
        accusamus. Ab inventore repellendus nihil. Numquam, laudantium sint
        corporis laboriosam, quis dolor, necessitatibus excepturi saepe eos
        reiciendis molestiae quos aspernatur error a. Vel expedita nostrum ut
        aspernatur magni reiciendis atque hic possimus totam aliquid. Tempora
        incidunt eum ex similique. Blanditiis eos corporis, dolorem enim
        cupiditate suscipit, saepe repellat magni voluptatum et consequuntur
        assumenda nostrum nemo, commodi sapiente eveniet sunt impedit. Ipsa
        sapiente at iusto?
      </div>
    </>
  );
};

export default App3;
