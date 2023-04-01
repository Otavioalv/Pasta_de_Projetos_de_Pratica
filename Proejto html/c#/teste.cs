using System; namespace myApp{ class Program{ static void Main(string[] args){ string texto = "o t a v i o "; int qtd = 0; int whi = 0; for(int i = 0; i < texto.Length; i++){
if(texto[i] != ' ') qtd++;} while(whi < texto.Length){ if(texto[whi] != ' ') Console.Write("texto["+ whi +"]"+texto[whi]+"\n"); whi++; } foreach(char foe in texto){
Console.Write($"{foe}"); } if(texto.Length < 10) Console.Write("\no texto "+ texto+ " tem "+ qtd +" letras\n"); else Console.Write("\no texto "+ texto+ " tem "+ qtd +" letras\n");}
}}

//lingaugem Inline, unica linha, pois e compilada em blocos  C, C# e javascript,  são lingaugens inline