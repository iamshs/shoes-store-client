import { useQuery } from "@tanstack/react-query"

const useShoes = () =>{
    const { isLoading,  data:products } = useQuery({
        queryKey: ['shoesData'],
        queryFn: () =>
          fetch('http://localhost:5000/products').then(
            (res) => res.json(),
          ),
      })
      return [ products , isLoading]
}

export default useShoes ;