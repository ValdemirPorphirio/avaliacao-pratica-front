import { http } from "./config";

export default {
  listar: () => {
    return http.get("/transfer");
  },

  salvar: (transfer) => {
    return http.post("/transfer", transfer);
  },
};