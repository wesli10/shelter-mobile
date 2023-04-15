import {
  View,
  Text,
  AppState,
  TouchableOpacity,
  TouchableHighlightProps,
} from "react-native";
import { Header } from "../../components/Header";
import { Configuration, OpenAIApi } from "openai";
import { OPENAI_API_KEY } from "@env";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState, useEffect } from "react";
import GallowsWord from "../../components/GallowsWord";
import GallowsMan from "../../components/GallowsMan";
import { Loading } from "../../components/Loading";

const Keys = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export function Forca() {
  const [loading, setLoading] = useState(true);
  const [word, setWord] = useState<string>("");

  const [guessedLetters, setGuesseLetters] = useState<string[]>([]);
  const incorrectGuesses = guessedLetters.filter(
    (letter) => !word.includes(letter)
  );

  async function getWord() {
    setLoading(true);
    try {
      const configuration = new Configuration({
        apiKey: OPENAI_API_KEY,
      });

      const openia = new OpenAIApi(configuration);

      const completion: any = await openia.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: "Uma palavra aleatória sem acento com o tema: carro",
          },
        ],
      });
      const string: string = completion.data.choices[0].message?.content;
      setWord(string.toLocaleUpperCase());
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      getWord();
    }, [])
  );

  function addGuesseLetters(letter: string) {
    if (guessedLetters.includes(letter)) return;

    setGuesseLetters((guessedLetters) => [...guessedLetters, letter]);
  }

  function handleClick(lettler: string) {
    const key = lettler;

    if (!key.match(/^[A-Z]$/)) return;

    addGuesseLetters(key);
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <Header title="Jogo da Forca" />

      <View className="mt-24">
        <GallowsMan numberOfGuesses={incorrectGuesses.length} />
        <GallowsWord
          guessedLetters={guessedLetters}
          word={word.toLocaleUpperCase()}
        />
        <View className="flex flex-wrap flex-row items-center gap-4 mt-10 justify-center ">
          {Keys.map((letter) => (
            <TouchableOpacity
              key={letter}
              className="border-2 border-zinc-700 rounded-md w-8 h-8 "
              onPress={() => handleClick(letter)}
            >
              <Text
                className="text-base color-white text-center font-bold "
                key={letter}
              >
                {letter}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}
