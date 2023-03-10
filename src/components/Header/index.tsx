import { ProductContext } from "../../contexts/ProductContext";
import { Container, Input, SearchContainer } from "./style";
import logo from "../../assets/LogoKenzieBurguer.svg";
import { useContext, useState } from "react";
import { Button } from "../Button";

const Header = () => {
  const { products, setFilteredProducts } = useContext(ProductContext);

  const [valueInput, setValueInput] = useState<string>("");

  return (
    <Container>
      <div>
        <img src={logo} alt="burger kenzie" />

        <SearchContainer>
          <Input
            type="text"
            placeholder="Digitar Pesquisa"
            value={valueInput}
            onChange={(e) => setValueInput(e.target.value)}
          />
          <Button
            size="medium"
            color="green"
            onClick={() =>
              setFilteredProducts(
                products.filter(
                  (product) =>
                    product.category
                      .toLowerCase()
                      .includes(valueInput.toLowerCase()) ||
                    product.name
                      .toLowerCase()
                      .includes(valueInput.toLowerCase())
                )
              )
            }
          >
            Pesquisar
          </Button>
        </SearchContainer>
      </div>
    </Container>
  );
};

export { Header };
