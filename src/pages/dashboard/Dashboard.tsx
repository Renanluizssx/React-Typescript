import { useCallback, useState } from "react";
export const Dashboard = () => {
  interface ITarefa {
    id: number;
    title: string;
    isCompleted: boolean;
  }
  const [lista, setLista] = useState<ITarefa[]>([]);

  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> =
    useCallback((e) => {
      if (e.key === "Enter") {
        if (e.currentTarget.value.trim().length === 0) return;
        const value = e.currentTarget.value;
        e.currentTarget.value = "";
        setLista((oldLista) => {
          if (oldLista.some((listItem) => listItem.title === value))
            return oldLista;
          return [
            ...oldLista,
            {
              id: oldLista.length,
              title: value,
              isCompleted: false,
            },
          ];
        });
      }
    }, []);
  return (
    <div>
      <p>Lista</p>

      <input onKeyDown={handleInputKeyDown} />
      <p>{lista.filter((listItem) => listItem.isCompleted).length}</p>
      <ul>
        {lista.map((listItem, index) => {
          return (
            <li key={listItem.id}>
              <input
                checked={listItem.isCompleted}
                type="checkbox"
                onChange={() => {
                  setLista((oldLista) => {
                    return oldLista.map((oldListItem) => {
                      const newisCompleted =
                        oldListItem.title === listItem.title
                          ? !oldListItem.isCompleted
                          : oldListItem.isCompleted;
                      return {
                        ...oldListItem,
                        isCompleted: newisCompleted,
                      };
                    });
                  });
                }}
              />
              {listItem.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
