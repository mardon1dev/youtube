import { useEffect, useState, createContext} from "react";

export const YoutubeContext = createContext();

export const YoutubeProvider = ({children}) => {

  const [theme, setTheme] = useState("dark");

  const toogleTheme = ()=>{
    setTheme((current)=> (current === "light"? "dark": "light"));
  }

  const [burger,setBurger] = useState(false);

  const [input, setInput] = useState("");

  const handleBurger = ()=>{
    setBurger(!burger);
  }

    const [data, setData] = useState([]);

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '7aabe2c94cmsh667a633f957c82dp136b53jsn53721ea38cb3',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
      }
    };
    
    
    const getData = () => {
      fetch('https://youtube138.p.rapidapi.com/playlist/videos/?id=PLcirGkCPmbmFeQ1sm4wFciF03D_EroIfr&hl=en&gl=US', options)
      .then(response => response.json())
      .then(response => setData(response.contents))
      .catch(err => console.error(err));
    }

    useEffect(()=>{
        getData();
    }, []);



  return (
    <YoutubeContext.Provider value={{data, burger, handleBurger,setBurger, input, setInput, theme, setTheme, toogleTheme}}>
        {children}
    </YoutubeContext.Provider>
  )

}
