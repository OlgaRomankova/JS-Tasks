// Deoxyribonucleic acid, DNA is the primary information storage 
// molecule in biological systems. It is composed of four nucleic 
// acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. 
// RNA differs slightly from DNA its chemical structure and contains no Thymine. 
// In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.
// The input string can be of arbitrary length - in particular, it may be empty. 
// All input is guaranteed to be valid, i.e. each input string will only ever consist 
// of 'G', 'C', 'A' and/or 'T'.
// "GCAT"  =>  "GCAU"

function DNAtoRNA(dna) {
    let arr = Array(dna)
    return dna.split("").map(item => item == "T" ? "U" : item).join("")
  }
  console.log(DNAtoRNA("TTTT"))
  console.log(DNAtoRNA("GCAT"))
  console.log(DNAtoRNA("GACCGCCGCC"))