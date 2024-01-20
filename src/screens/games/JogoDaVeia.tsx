import clsx from "clsx";
import { useState, useCallback, useEffect } from "react";
import { TouchableOpacity, Text, Modal } from "react-native";
import { View } from "react-native";
import Winner from "../../assets/winner.svg";
import Draw from "../../assets/draw.svg";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";
import { Header } from "../../components/Header";

const winningCombinations = [
  // Horizontals
  { indexes: [0, 1, 2], orientation: "horizontal" },
  { indexes: [3, 4, 5], orientation: "horizontal" },
  { indexes: [6, 7, 8], orientation: "horizontal" },

  // Verticals
  { indexes: [0, 3, 6], orientation: "vertical" },
  { indexes: [1, 4, 7], orientation: "vertical" },
  { indexes: [2, 5, 8], orientation: "vertical" },

  // Diagonals
  { indexes: [0, 4, 8], orientation: "diagonal-1" },
  { indexes: [2, 4, 6], orientation: "diagonal-2" },
];

export function JogoDaVeia() {
  const [gameData, setGameData] = useState<Array<number>>([
    0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [turn, setTurn] = useState(1);
  const [winningCombo, setWinningCombo] = useState<any>(null);
  const [visible, setVisible] = useState(false);
  const [GameWinner, setWinner] = useState<string>("");

  function handleClick(clickedIndex: number) {
    if (gameData[clickedIndex] !== 0) return;

    if (winningCombo) return;

    setGameData((prev) => {
      const newGameData = [...prev];
      newGameData[clickedIndex] = turn;
      return newGameData;
    });

    setTurn((prev) => (prev === 1 ? 2 : 1));
  }

  function resetGame() {
    setGameData([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    setTurn(1);
    setWinningCombo(null);
    setVisible(false);
    setWinner("");
  }

  const checkWinner = useCallback(() => {
    let winner = null;

    for (let combination of winningCombinations) {
      const { indexes } = combination;

      if (
        gameData[indexes[0]] === 1 &&
        gameData[indexes[1]] === 1 &&
        gameData[indexes[2]] === 1
      ) {
        winner = "player1";
      }
      if (
        gameData[indexes[0]] === 2 &&
        gameData[indexes[1]] === 2 &&
        gameData[indexes[2]] === 2
      ) {
        winner = "player2";
      }
      if (winner) {
        setWinningCombo(combination);
        setVisible(true);
        setWinner(winner);

        break;
      }
    }
  }, [gameData]);

  const checkGameEnded = useCallback(() => {
    if (gameData.every((item) => item !== 0)) {
      setWinner("VELHA");
      setVisible(true);
    }
  }, [gameData]);

  useEffect(() => {
    checkWinner();
    checkGameEnded();
  }, [checkGameEnded, checkWinner, gameData]);

  useEffect(() => {
    if (winningCombo) {
    }
  }, [winningCombo]);

  return (
    <View className=" flex-1 bg-background px-4 pt-16">
      <View className="flex justify-center align-middle items-center pt-36">
        <Modal
          visible={visible}
          animationType="fade"
          onRequestClose={() => setVisible(false)}
          transparent={true}
        >
          <View className=" flex h-2/3 justify-center left-12 mt-32 items-center border-2 w-3/4 bg-background rounded-2xl shadow-2xl shadow-gray-400 border-violet-400">
            <View className="flex-1 bg-background justify-center items-center">
              <Text
                className={clsx(
                  "text-green-500 mb-36 font-extrabold text-4xl",
                  {
                    ["text-zinc-500"]: GameWinner === "VELHA",
                  }
                )}
              >
                {GameWinner !== "VELHA" ? "PARÁBENS!!" : "EMPATE"}
              </Text>
              <Text className="text-4xl color-white uppercase ">
                {GameWinner}
              </Text>
              {GameWinner !== "VELHA" ? <Winner /> : <Draw />}
              <Text className="color-white text-xl font-extrabold"></Text>
              <TouchableOpacity
                activeOpacity={0.6}
                className={clsx(
                  "border-2 rounded-2xl bg-green-500 p-5 flex-row items-center",
                  {
                    ["bg-zinc-400"]: GameWinner === "VELHA",
                  }
                )}
                onPress={() => resetGame()}
              >
                <Text className="color-white text-xl font-extrabold mr-4">
                  Jogar Novamente
                </Text>
                <Feather size={30} color={colors.white} name="refresh-ccw" />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
      <View className=" flex-row flex-wrap">
        {gameData.map((value, index) => (
          <Text
            onPress={() => {
              handleClick(index);
            }}
            key={index}
            className={clsx(
              "outline-2 outline-white text-center border-2 border-violet-400 text-2xl pt-12 h-28 w-2/6",
              {
                ["border-0"]:
                  index === 0 || index === 2 || index === 6 || index === 8,
                ["border-t-0 border-b-0"]: index === 1,
                ["border-l-0 border-r-0"]: index === 3,
                ["border-r-0 border-l-0"]: index === 5,
                ["border-b-0 border-t-0"]: index === 7,
              }
            )}
          >
            {value === 1 && "❌"}
            {value === 2 && "⭕️"}
          </Text>
        ))}
      </View>
    </View>
  );
}
