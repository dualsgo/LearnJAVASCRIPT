var idade = 222;

if (idade == 16 || idade == 17) {
  console.log("Voto opcional");
} else if (idade >= 18 && idade < 65) {
  console.log("Voto obrigatório");
} else if (idade >= 65) {
  console.log("Voto opcional");
}
