export function Componente() {
  const [imagens, setImagens] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.businessinformativos.com.br/Services/Informativos/json?auth=ODkyNw%3D%3D"
        );
        console.log(response);
        setImagens(response.data.infos);
      } catch (error) {
        console.error("Erro na requisição:", error);
      }
    };

    fetchData();
  }, []);
  return imagens;
}
