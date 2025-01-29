import React from 'react';

const mentors = [
  {
    name: 'Ansh Agarwal',
    university: 'IIT Bombay',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100'
  },
  {
    name: 'Shruti Sharma',
    university: 'IIT Delhi',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100'
  },
  {
    name: 'Raghav Sharma',
    university: 'VIT Vellore',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100'
  },
  {
    name: 'Karan Yadav',
    university: 'BITS Pilani',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=100&h=100'
  },
  {
    name: 'Arpit Singh',
    university: 'SRM UNIVERSITY KTR',
    image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlgMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAgMEBQYHAQj/xAA8EAABAwIEBAQEBQMBCQEAAAABAAIDBBEFEiExBkFRYQcTInEygZGhFEJiwdEjseFSJDM0Q4KSorLwFf/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgQDBf/EACERAAICAgICAwEAAAAAAAAAAAABAhEDMRIhBEETIlFC/9oADAMBAAIRAxEAPwCzta4fG67ram26WYQbBBuYgAO9wQj5TfTcbX2suRZzuORXct9BcJQNuPTz6pZseuyAEo2OADSL6pRsO+h6XXZnsp4nSzPbExo9TnmwCz7iHxWo6WR9PgcH4uRpt+JeS1gPYbn7DumkIv8APJFSx+ZK5rGN3OllDVvGOBUkRe/EIXNafV5bsx+ixXEuI6zGah0uL10+V17MyAsaezeSjskxaHgxFoOnlgAg23t0ToDbqPxE4bqphEa4xEkgOkjLWnprZWyllhq4xJTyMla7ZzTcFeb6cQ1cT2OYx72tuSGlrwOo5H6I9NW4jw/JDV4XXTxMkaHM0Ia7nYt2KKGekZGWbsm1rSj2Vb4D44h4jpfKrzFBXs9Jbewf0IVrDP6gPYqQEsuqDmenROC3mUV23ZAhvba5F7rgaHXPNK21+IixQy2GiBiWRpvYf5RwLAAckA03+V0dmtroEDL0XEc+ncX6WQQAwAuRry1SgaSRY6X1Qayx7o/lkkC/uEDAY3bM580rO+KClfPUSCOKNuZ73GwaBzKMwZWk2Ngss8bMdmiFHgsMzgyRnnTtabXF7NB7XB+iaVgyn8ccVVPE+IPMb5G4fEbRQ3IDhf4yOp+yrQme0+lwAGlr2/yiMkAdctv25I3mPceVyrJOtc+V9soe47A81LU8LY2MnuHQuIY9jwbxnqLqOFHP5YqGRucwHUtF7Kcq/wDaMOZOZM8jhaQCxDrc/cdCkykJsLYi8i4ML7OZvlB6DmP4TCtkzROib8OfMGjZunL/AO5lAVb3vD89qiPQOt8Y6FOW4c6WN0sUL5HPHoYzcdSeiltLY1FvRG0dW6kqIZ4iRJE4FpB6clvfhxxQzHaRlPMXfjIWWeXfmXn+duV7mattuD1V38JMUNFxLT0/oDJzlc5xt17JvVk+zfXM7JItTxzD03STmKQGpGqLprbknHlm655YHLdADW4zkai3M80o1t2iyM6AOOoXRFl+HY7hAwBtiTdcRwwndtvYoJAMh3t3N0q0tFjcXSXlMLhfN7Zijtga0+m+vU3TAUDxmAGo5hYb40Nkdxk3M2zTSR5Pa7r/AHutyNM30Elzg25Hq3Kyjxzw/wAuXCsRZoCHQO/9h+6a2JmUBt9jbVTWEYf5jHPey7NCC8WGnQqIiDc4ztLhfUA2U7h8r5SKemAjiJ+Fzbn6/wAIlKl2OEb0Bsr6aV7omljTsLb/AM/UKWwzhXFceJqoacRMJtmGhd7hT+A8KtmkY+paMtrkcytEwxrKSNkULQ1g2sss/I9RNcPHruRR8N8J5HZJK2chwN9Bsrlh/DFHhsTyxjXPIs423VoZLdgPZNZ3NIOqz5JN7Z2gknow3xH4fZR4o2ogZlZOCSANiFT8KldRYpTVBBDopA4ctit44xw+GuwmTzW3Met+3NYvW0JiMhy98x5rV42RuNMzeRjp2j01QTuqaGCZxA8yNrtPZLO03sovgyQTcKYVICTelj1I1+Gyl3NBXcziVwikt6pTKFzI2+jQgQkXNA10RhYjsjOjBQazK70oGFsEEYsLthdBIBg34R2RhuO64B02SltARuNkxCjRppuqH4yYfLV8H+bG1xNJO2VwHJti0n7q/wAdrBCspabEaSahqmh8U7HMcw8wUWB5Sw0NdM4O5t0upfCHtir4ydri6TxrA5uH+KKrC5b3gccjj+Zm7T9EjBVwUlS90xJI2Dd7qMqb6R2xNLtm04K5lRCNr2UkT5VhbZZvgHF9HC5rHiZmm72K80GJU2K5W0zw5xPJYHBx2eipRlosFJIXtbc7phimO4bQHLPXwNeTYNDrn6Kp8bSVNNTtZUTVDIDoY4XZM3ud1A8OVYoMTgpaThmIzy5THLKCQQTYkkA2sNfkrjBSInLj2X+nxaixRroo5RIDo5uoKzHjDBXYViTGwOc6mqNWN77WWsYPPUYkXfjcPNLIw5bXBb8uygfEChaKaCqc300lVHI4n/TmF1ON8J9BkjziW3giZ0PD2GYfVMdHUx07GkOaGgkDW2v9wrA4C+h5qs1bo6r8BXUkflVNNOzOxzfVlJyuH3VqLOu62YcjndmPPiUKaEi2w2CJlN7W2CXyrhb15rqZxENPNdA1CO0aIrwRqN0MAzQNfdBGa12UX356IIGRLeiUaxJt3S7UCDtaP3TmIDlySDWpxENCdRfogZjHjJccaYcXU8bQ6js2UH1S6nQjoLf+SoNNKKOqDqVkbp3v+N40b3WreOOEOfR0GPRA3opBFKP0OIsfqLfNZbTYc2prXsbIM2f4TpcFRN0uztjV6LLh2Hz4nTVYx6qaYyCYJY7Zi7SxtbYAHvr2TDw6q5aLicQCTO0uy687Kzsww0eFPMTcoy3zc1ROHnGPiaF0egjl1I6LOp84yRrcOEom/wCPYSzF6V0Mw0cLtdzB5WUFhvDgwqTM+ondYWtcaj6K0wSSS0kckIzekJrWzStcC9nuOiz6Osfwd4dCCy8ceVvc3UZxPSMnpZYpG5myMILeRUth1bEYgLqM4kq2R0krwQSBsiSVKiE3yOcNx/j6SGuzlwkhjjtf4SzQ373CtZaCDcX6Kn+FNU2r4fqBrmhq5GFpPw3NwPoQrnl5DZbsOPir/TDnycnX4JNF9TohulAwBcy8zuuxxsTLdb9kAzRKFqDRuOiTAAFggjnQaoIAr7SnDdgmrbp1Eb20KYDlgTmMelN2g3AAt3Tlmg2SGNMRw2mxfDqvDq+MSU1THkkb+47jf5LzfU08mE45NRyOLpaOYwPdzcGmwP0svTzGWdcfdYB4y4e/CeMG10bSI66PMbbZm6H+fmlKPJUVCXGRL12KxnBC1psS2yzWkxD/APPqDUNiL5RJmA5EXTibFXOpWsFyCbHVRYAnlZJLIGRk6MbqT8lnxY6Ts1ZMttcdmt0HHtO3B2ivmlpGSOPlthdd9udzbRPYvEPBoI/Kc+olePzTakqs4RQ/icLEJwuCoj1yTT6OB2FgVZqfhI1NOyFz44/MsXeXGLN7ZjupfE1cJ1ZI4TxJhWLygUknlTWzZTsQq/xvxA0wtp6VwEkjQSd9EjW8JRcI43T1kFW51C5j7iTQsdbqOqoOJ1mapkcCTmFmg62ASjjTl0cJTaj9jYfAfNJgmKzuv/UrBYW/Q3+fstOsqh4TYOcI4Jo2yi1RU3nmFrWLth8hYK4Fbkjz2+wpXLI9l2ydCE7LgZbMTz2SligAkwsJa6CUsggdlYZcDTRPIr21Nk1jvcdE9iGoUjFGA23v3snMYPUpKMbDrzTljUAKAdVWvEPhSPivh2WlblbWRAyUzzp6+nsbWVnaFB8U8X4JwrTPlxara2TIXMpozmlk7Bv7mwVEs8o1VNUUVVLQ18b4Z4nZZI3ixaVJReTKYiyNoDQAQFKcfcXx8a4myqZhkFCYxlbI0l0snTMdvt81XaGc08vq2JUzja6OkJVsvuE1uJRU2WipYSARlc++nyWn8I01YylEmJztklNrAaALGqLiv8PGYGNFiNSUvLx5VxsayJ+RreY15LJ8c2+0bnmjWy1eL2MxPY2ggfd51BB005KteHGARYzjLausDnQU5a9sYFxI7kT2B/so3BsHxHjDEA2PP5BJc+Z3wsHS/Mrb8AwODCqGnp42tHlNDbho1VTaxx4rZyiucreiyYVUxMBp3SNa8m7GnTMOykx32VbqqcS5bjQKOxqnrYqGeopMRrKWaFjnsfHKbekXsWm4I05hLFnqoyJy4L+0WXYbIBZZw54n1DHvg4gh84Aj+tAwBzQR+ZvP5LRsHxjDsZg8/DaqOdnPKdW9iNx81vcJIxJj1dRrIKRhLLqNZBAFXZcb6J9Cy6bQxkkX15WVZ4i8ScD4emkomiWtrojZ0UA9LD0c46fS6lK9FvovbGbaKI4n4uwThSn8zF6sMkIuymj9Usns39zYLGMc8V+I8Ua+LDxBhsLhoYQXSf8Aef2AWdzGapqHyTSPllcbvkkcXOd7k6ldFjfsjkjSOKfGbGsSD4sGjbhlLsHj1TO/6jo35D5rMqieWpnfPUSPllkN3ySOLnO9yUJQMwYOuqFruI5BVQrCwHKSU+gibKQHA7pi0EHN9lYMFoH1QbJFq29jbkehXDL9VZ3xK+iOfhxbYF1we2oV04G4YoKmUS1tHI8X0Ln6H5KTp+HIZqUhzcz+/JTWAUk9AMgcQxvIrK80mjXHCosuuH0FNQ0zIKSGOGJosGtCkY26KHp6q5aNLlTUHwAnbuuDtstqkdfI1jmMfYCQ2B/VyCpXiRxKIGuwbD3AzH0zuHK4+H+U64z4tp6SF9FhzmzVgPqlbqISOnVyzHO6SpdLMbyOJ3O3+V6XieNf3kjz8+f1ETka9sUdn5vLu73J3KWoax9HUtqKSV8M42dE4tJQaxr4nFxCavBa0uHysV6lJmHs0TBPEuupMkeMRNq4iP8AeNs2RvvyP2WkYLxBhmNRh1BUtc+1zE7R4+S87U0gkBa71HfVOQ+SKZj4neXK34XhxBHsVxlhT0dIzaPSiCxTD+OeIqKPKyqjnba2WrZnI9iCCguPwSK+RC3iTx07DBLg2CyWrXttPUj/AJAP5R+v+3usnhhEh9Iszm47u56lIyPfUPdLI5z3vcS4k3LjuSfdPY4y+INGjcoJtv7LrjgkiJybEqiPO3JHpE34j1RG02SEut7Jy/1OZAB8TrI+KubBSlosHbCy6NLZNt9EDTwmaV7xc2R4YC90otsVPYZRsgoM0rfWRdI4WwGSqOwChYynMi6WlLrkjZStBJNh0glpZPLedDbUH3GxRKdoLiLb8gnLorW9Nj3VcI1TDm7tFswbjGGJ2XEaR7P1QHMPodlZ4+KuHXMu6pkYXf6oXX+wWVx3bsUtZtvgH0WeXhYm7O8fLyJUaHLxpg9O8fh/PqCNgI8o+pUdivGeK4pF5MA/CUx0IjJDiO7v4sqeHEHRgHcNTmDNIbnW3NXj8TFB3RM/IyT2KyOGm+br/CTN2gm6TkLTK1ovrruuyFrdL/ZaTOPoWZaU31FrpKJrZQWG6cwi9KQDvoE1w8g1ZbvYoAYucaeucNLDVSgIlizAEk72SeIUTHvcHCxvuAmFDPLS1X4So2tdh6hMY98zyjlNgfugj1TZJZ2iAjzHAuu4bAG1v7FBMRUIdQ7tspYgMp48v5m6/UrqC5wHIQoxmrJCd2RjKk6sCXEqeJ/wZ9guIJ/yC2TNYMkBDdgFHYV/w1Y7nmXEEexLQelYBUtHLLdPqpoBd2QQTAawtBeQeSWIzHVBBAws2jBonmGttSufzuggkAjT/wBSsfm5bLkusvzQQTAk6P4T7KNmPk4i0x+nXkgggROVQD44nnd26guI2NZSCdotJE4ZHdLoIIAmMIAmkzP1PlD7n/CCCCQz/9k='
  }
];

const universities = [
  {
    name: 'IIT Bombay',
    mentors: 45,
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'IIT Delhi',
    mentors: 38,
    image: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'VIT Vellore',
    mentors: 52,
    image: 'https://images.unsplash.com/photo-1567168544646-208fa5d408fb?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'BITS Pilani',
    mentors: 41,
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=400'
  }
];

function Network() {
  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-4 pt-20">Our Network</h1>
      <p className="text-xl text-center text-gray-400 mb-12">
        Connect with mentors from India's top universities
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {universities.map((university, index) => (
          <div key={index} className="bg-gray-800/50 rounded-xl overflow-hidden">
            <img
              src={university.image}
              alt={university.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">{university.name}</h3>
              <p className="text-gray-400">{university.mentors} Active Mentors</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold mb-8">Our Mentors</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {mentors.map((mentor, index) => (
          <div key={index} className="bg-gray-800/50 rounded-xl p-6 text-center">
            <img
              src={mentor.image}
              alt={mentor.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="font-bold">{mentor.name}</h3>
            <p className="text-sm text-gray-400">{mentor.university}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Loved by thousands of people</h2>
        <p>Here's what students say about UNIVoice</p>
        
        <div className="space-y-4">
          {[
            { rating: 4, text: 'An exceptional mentorship experience awaits you! Our expert mentors provide invaluable guidance, empowering you to navigate your academic journey with confidence.' },
            { rating: 5, text: 'Whether you need career advice, skill development, or personal growth strategies, our e-counseling platform is here to support you every step of the way.' },
            { rating: 4, text: 'Absolutely awesome experience!' }
          ].map((review, index) => (
            <div key={index} className="bg-pink-100/10 p-4 rounded-lg">
              <div className="flex gap-1 mb-2">
                {Array(5).fill(null).map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    {i < review.rating ? '★' : '☆'}
                  </span>
                ))}
              </div>
              <p className="text-pink-400">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Network;