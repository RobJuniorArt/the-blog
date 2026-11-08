import { hashPassword } from "@/lib/login/manage-login";

async () => {
  const minhaSenha = ""; //Não esquecer de apagar sua senha aqui
  const hashDaSuaSenhaEmBase64 = await hashPassword(minhaSenha);

  console.log({ hashDaSuaSenhaEmBase64 });
};
