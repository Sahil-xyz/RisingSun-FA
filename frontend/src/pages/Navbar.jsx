import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-blue-200 to-blue-500 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        {/* Logo and Title */}
        <Link to="/" className="flex items-center">
          <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEhUSExIVFhUWGBgWFxgYGBcZHhogHRoaGBgYFhcYICggGxolHhgXIjEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGjchICYwLTAtLS4tListNS0tLS4vLS0tLS0rLS0uLy0tLS0tNistKy0uMi01LS0tLy4tLy8tLf/AABEIAN8A4gMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAABwQFBgMCAQj/xABTEAACAQMCAwYBCAYECQgLAAABAgMABBEFEgYhMQcTIkFRYTIUI0JSYnGBkRUzcoKhsSRDksEIFhdTVZOiwtMlNGN1g9HS8DZzlKOksrPD4eLx/8QAGwEBAQADAQEBAAAAAAAAAAAAAAECBQYDBAf/xAAxEQACAQMCBAQFBAIDAAAAAAAAAQIDBBEhMQUSQVETYXGBFJGxwdEGIlLwMqEVI2L/2gAMAwEAAhEDEQA/AHjRRRQBRRRQBRRRQBRRRQBRRXh5AOpxQHuiqy71yGPqw/Os5qPaHax58a/nUyi4ZtqKUl72v268g2aq5O2SPPLJ/OnMMDvopHr2yJ55H4Gp9p2wwHq2KZGBw0VgtO7SbWTHjFaSy4jgk6MPzplDDLmiucc6t0IrpVIFFFFAFFFFAFFFFAFFFFAFFFFAFFFFAFFFFAFFFFAFc5ZlUZJqu1jWooFJZgMUptZ42u76b5LYRtK56kdFH1nboo9zUbLgYHEPG9vbg5ccqXcvG+oX7mOwt5JsciyjCj9pzhR+Jru3BmnWCi61y7Esh8SwKW255clQeOXB8+S8+Yqk1/trlCdxptulrEowrFVLAeW2MeBPu8VTAz2L+Ps31CUd7qOoJbp1ZUOcD7UjkKv8aivZ8H2n62drtx9uSXJ/7LEf50sRb6tqrGTbdXZGTu8bqvmQD8K/sjHsKoJoWRijqVZTgqwIIPoQeYNXCIOQ9qWh25PyXR0OOQYpDGT75AY/nXz/AC9uvwadGv8A2p/uQVQ8G9ndve6XcXxnkEsImAjULt3Im9ckgkggj0rL8E8JXGp3AghwoA3SSNnai5xk46k+S+f3AkUDHHb7IeT6fGw/9af70NfW7XNIn/51o6N6+GGXy543qtQtb4W4Z01+4urm7mnABdYtvhyMjIxhfXG4nmK42PZ9pOpo/wCir2QTINxhuQOnTqoBAzjxDdjIoC2S64NvD8L2jnzHeRY/slox+NTk7NXZe90rVVlXyWQq4+4yxdP7NI/UrCW3leGZCkkbFXU+RH8x7jkRzrzZXksLiSKR43HRkYqw+5lINTAHLLxBrGmHF7bOIwcd6vjj9B415DPocGtxwz2h29wB4xmlVwz21X8GEulW6i6HdhZMftAYblnkw5+tamDQ9C1nMmnTfI7vG4xgBfv3Q5wR9qM/fUx2LnuOK2ukcZU13pER65qWjyrFfodhOElXxRv+y3kfY4PtTV4c4nhuUBDA5qpjBoqK+A19qkCiiigCiiigCiiigCiiigCiiigCs1xVxPFaxklgMV64s4hjto2JI5ClVoOjSa1K93duYtOiJJJO3vdvNgG8ox9JvvA55IxbKGm6dfa9IX3mCyUkNL5vj4liB6/tdB79KOIu0ay0yI2OixpkfHccmG7oWBP61/tHwjljI5Cj7Se0o3Q+Q2A7qzUd34BtMoHIAKPhj9F8/P0HnReze2gjSfWbsWiyc0gBHesPVuR2j1AUkZGdp5VUsEMRCZr+7QTT/OTuqGWVmIBY4BY8yB/AewrZ9pfZedLt4Z0laYElJmIACseaFVGcKcMOZPPHrWZ4jtraaZzpttP8mjGNx3uWx1duXgB9D5c+XQPHgHVo9d0iSzuDmVE7mUnmemYZxnzyAc/WQ1QeuxjiKS40kxoFa4tA0aq3IMMFoc46A/Bn7BPOq+DVtC4iURXEfcXmMLkhZM8+UcuMSgc/Cw/dHWsJ2U6s2las9tcsI1ctbzbjhVZSSjknyyMA9MPmsz2hrbDUblrWVZIXkMishyAW8TAH2YsBjyxQD87NeC7jTVvLSRhJDIVeKQct25Sjhk6qwAT1HPkeuML/AIOepxRXF1ayYWWUIUz1bu94dAfUbs49j6VScOdtGo2sHcuqXBGNjyltwHoxBy46czz68z5L+a/kMzXCnu5C5kBQldrFt3gOcjB6c80BrO0bSGttYmN2H7mW4Mu4A+KJ33HuyepVTt9iK3fB/A2j3/eTabd6hA0fhLfCBu57QwUZ6DIDeYz1FZGz7Y9VVBHKLe4A85osn8dhUE+9TdM7bdQSZXkihMIVl7iId0uT0YMdzZGOnTmaAw/GETJe3EbTvcGORozLJks+zwcySTy24HPoBVOBXS5naR2kc5Z2LMfUk5J/M1quzvhCLVJJYDc9xMFDxAruDgZ3jqDkeE8s8ieXKgGFqPY3plpbLLeahJG3JS+ECbj5Ku0sRyPn5eVYfiPs+u7JBe2sy3VsPELi3PNMebBSSuPUE4xzxWu0PjpIxJouuRb40Pc96QcgLyQyfSxjBWReeMHn1r7Lptxw5cLeW7NdaXOMOAwPJh4N2PCT02uBg815buYEfgztYSVPkWsIs0L+HvmUMR6d8v0gPrjmMA8+tTtd4Tn0vF9psjXFi3jKg7zGp57lI+OLHn1A655mlbxlJYvdPJY7hBIA4Rl2mMkeOPHTAOcY5YIHlWl7O+P7rSJfk86ubYt85CwIaMnqyBuYPmV6HPrzqNAc/A3G0V0g8QzW5VgeYpK8X8MLCBrGkkNA47yWJOmPOSIeQHPcnlg+hA2XAHGEd1Gvi54qbFNzRXwGvtZECiiigCiiigCiiigCoGsagsMZYnHKprtgZpO9qXEMsjraW+WllYRoo8yTgVGyorIrabXr8wgstpCQZ3Hp5RqfrNj8Bk+xpu1rjxJR+jLHCWcOEYpyEhXkFXH9WpH7xGeYxV9x5qEeh6bHpVs39JnXfPKvI4PJ39QXwVX0VT54NZnsk7OY9TWeWeQrEgMahGG/eQDuI8lUeRHMn2NEsELH/B94YiuLiW8lAb5NtEanpvbJ3kfZA5e5z1Aq8uuBYopJNT4hvEcliViRm2nGSqLnDMAOiKB05k86xep2Os8NzN3UpWOXwiVVVkkxkqGVwQsg58uvXBIq1sOHUv4Bqet6o0YckxpuTcUH1E5hSSOSqvlnHOqBh9nfH8V5JNHBZC2sbePcJSVULjGFZFG1cruPInGz3pKW/Gslnqdze2IVUlebajA7SjMSuVBGOeGA8unSpnGXHSSQ/o/T4vk9ip6fTmP1pT1xnyyScAnyAzvCHD0uoXcVrHy3nxNjOxRzdz9w/MkDzoCHrerz3cz3E775XwWbCjOAFHJQByAA/CoVfobiztFt9Ilj020tFmEMaKfHt2nHhTO0lmxgknzb1zUSPtavCMjSU/1p/wDBWEqkY/5PBVFvZCEop+/5Vr3/AESn+tP/AA6+/wCVa9/0Sn+tP/DrD4il/JfMvJLsIGini3bVOCQdLjyOR+dP/Dr5/lsn/wBGR/60/wDgrPnj3PX4at/B/IR9dLa5eN1kjdkdTlWUkEEdCCOYNO6PtpuGIA0uPJ6fOn/h19HbY6SIJ9NWNCwDMJMkDPiIGzmQOePOqpxbxk8505w/yWDMQce2GoIsOtW251G1buABZB+2o6+Z5ZHP4fOthecWaDa6LJY2901wGilSNHDFyZNxG7wKECs2egxjzNY3tr4VS3uFvrfBtrvxgr0Dkbjj7Ljxj970pa1kYDn7E+zkSbdRu08A8VvGw+IjpKwP0R9EefXpjNH238T2N5dKltGrNDlXuB/WfYXHJlX6x/DlzOt484mmm4etprI7YmCQ3OzrGAuwx+oXeAM8sgr5NSU0fSbi6lWC3jaSRuir/MnoAPU8hQG87Ie0NrCUW1w2bSQ+f9Sx+mPsH6Q/H1zpuNdCbRrpb61H9CmYb1X4YmPPljpG3l5A8vSqPi7shax035U04adCDKmQE2nliMnBZgfzGcDlz0HY1xLFf2smjXnjHdkRZPNo/NAfrJyKnyHT4ajWQM/hPW0uYlYHORV/SJ4SuZtKv5NOnYkKcxsfpoeaMPw6+hBHlTwtZg6hhRFZ2oooqkCiiigCiivhNAUnFmpiCFmJxypW9m8aNJd65dfqrcOkOfUDMjrnzxhBjqWYVM7ZNZfaII8l5CEUDqSTgAfjVR2vTLp2mWejxEZKh5iPMKckn9uUs37lYrVl6Cu1nUbjUrx5irPNO/hRQWPPkkagdQBgD7qvZ9C1vQzHebWg3EDcrK4yeeyVQSOeOh5cvUVouy9IdNsZ9bnj3vnuLVOm4nkxU+WTkZ6gI/XNMm4hm4g0SPIS3echjnLBQkpGV6E7ggP73WsiFZwf2l2GrR/Ir+ONJXAUq/6qU/8ARk81bPQE5zjBJpHca2dnDezRWcjPAjFVLeo+IK30lByA3njz6nR9ovZ1HpMUbPed7LKxCxiLb4QPExYueQyo6edYGgCnnwPapoWkSanMo+U3KgQoeuD+qT8f1jewHmKwnZHwf+kb0d4ubeDEk3o3PwR/vEc/YNV12p8SfpG/7mM5trUlFx0Z+jv7jI2j2GR1rGUlFZZ7UKMq1RU47sy2n27yO00pLSSMXZj1LE7iT75NN/gq5huU7twBMg59PEPrD39f/wA0tYgqgZIHlUuwvXjdJIm8QYbCMcyTtA9OZOOfrXOX9KV1FrZ9H5nfT4Vbq18LKUorOfz5Dl/Q8X1RR+h4vqivHDmtpdxbwNrjlInLwnrkEcipGCGHIgirWuLqutSm4TymjknlPAr+0LhxYnWdB4H8LezeR/EfxFY7uF9KbfFWtWWyS1lZiSMHaudpOCviOF3DKnaDnBHLnSreNhklXxzO7Y4BHXIJHMYGfu511nDHcToLni/J4eq6HU8I4jbyo+HWkk492lldPlt8jnCoVgw6qQR+BzW/4k4ahubcSKow6hh+IyKwVNDgO5E1nsPMxMUP3fEv88fhXjxGpOmo1ovZ/Uv6gtoulGols8P0ZnOACl9Z3Gg3Z8cYL2zHqFzkY9SjY5eatjoKTGqafLbzSQSrtkjYow9wccvUeYPmCKbHGljLZ3Ed/bjEkLbx7j6Sn2IJB9jXrtf0iK/tINctB4XRVnAxkfRVmx9JGzG37vkK6exuo3NFTXucFVhySwYPgXjOXTnZSgmtphtngfBVweWQDkBscumCOR9mjp/aRw9p9uz2Fswmk5mLYytnqBJK2QFBJ5KWA8hSGrY9l3DtjfXTR3k5iREMgAIUPtI3AyH4QBz6ZIzzGK+w8z1fX+r8QXOArSkfDGnhiiBzzOThfPxMcnHU8hXPiLh290K7t3Lr3gCzRumduQfEnPBOOh9Qw9aa8/aRp1oY9O0eBJHd1iQgFYgzEKGZvilOcZPn9aof+EldxiC0hIBlMjyA+YVV2sPYMWX+x7UBJ7R4k1HTbfWbYfOQqHYDrsJxKh90YE/g3rWo7NteFxApznlS/wD8HrW1dbnTJfEjqZUU9CCAkqfcQVOP2qOAmfT9QuNPcn5qQhc+anxIfxUqfxrF9yrsPaivEL5ANe6yIFFFFAFcL2TahPtXeqfiifZAx9jRgVGmQ/LuIIlPNLcNcMPdeSf7bKfwpd9qesm91S4dclVfuIx15J4PDjrubcw/apkdmFx3S6vqR/q02r+4jyMPxOyk5w1exQ3cE84do45UkcLgs21g2BuIByRzyfWotivcY/arps0a6Xo8SNtREUttIR5pDs+L1zvPL/OV87V+LLizmj0uyuJIYbWGOJu7O1mbaDzcc/hKdD1JzTO0vtY0W4wDcd2eRxMjJj97BX+NUnaPw5odxZ3WoL3bSrGziWGX4mPJNwUlTlio6Z51SH55u7uSVt0kju31nYsfzPOvEMTOyooLMxCqBzJJOAAPMk14pudg/Cis76pcYENvnuy3IbgMvIc/RRf4n7NAaPVQNA0eOziI+W3eQzL1DMB3rg/VRcKp9cH1rEQcIywQiUDcmMsR1X9r296t4bp9Y1J7xge5U93Ap+iinkcerHLH3b2pr2VsFQLjyrmOM8X8CoqcNe5tuGVXbTVbGfLyEYXdcmPJbawxzwQVO4OQRtUgHnkY25BBGagapxFEJbjAG+MqLd1ZpFYrhRJJuYhm2qCCc4zz3EAhk6/wXMiytB3bo5kLRbXBKuclRtcA7QFUYAICjHmCodc0WNEDwhvCoaYNJE2zO1doQYk8LNtJKjn0yOZ2nDrihXp/9cubv5M9OLXVS4q+Oo8qeVo9Wv8A1j+474NnpOuT2srTqqhtqb41G1TiFA8e0fDtZWUAfDtx5V31nVbi8BhabMkRk+KJTt8SgERhMbCqsVbLECQqWPU00N0JR3y/DIzN1GVYndJGceYJJHqpU+oA153ce4ylIiTFyeYDoHPd90rBCMqQfZhgjNSnRh8S5Sh+7o+y1/J9l/b0qlhRrwmliOH3b7e2u5A1edIAILuFLg4eSKSM91jd4SGVAASGj688dOfQUPD86LMveHAIeMMTyQupQOQfogtk/nVlc6ppxfeYbm4IwAZpxhhjq2FyOfQZ9+XSo3DkXe3quiKqK/eFebbV3gYQAZZhuGOXUCtmc0aUtgMWwmz9YW6R4JUh8cydwICjmSDjoSO9peSJGjlJI4mYqq/BJLkosZwCD3hZ7h1wTs9SAprP6pfS200AkjDCMGRkc5DykssjSeZZHUpzJ/Ve5zLstUjkdJysl3etkqnNY4OZx+XxbgcDcTlWG6vnpW8Ix75NnxLilW9kubRLZfV+42oZ0v7XDHMqovecsZJHKRR5o2GII9CPKqHs2v1trqbSLkBre73d2G6BiMOnsHX+IHrV72daVMkTyzMGMgGDjG7xO5ZfSPMm1RgckLDkwrK9rWlFDFPHlXVsqw5EEYYEH1yK5uxuKdtxCdvTeYN/7x9noeapSrQS6i8454ZfTryS2bJUHdGx+mh+Bvv6g+6mqCntxLAOINFS9jUfLLUESKOpKgd6gA8mGHUfh5mkTXWmvGd2A8Pm41A3LD5u1Xd+++VQflvP7oqo7ZOIPlmpy7TmOD5hP3Cd5/Fy/PzAFNPsFurZdKkyyxMJpBK5YLklVKsGPTCkAe6n1qVDr3Cumfqjb7x9KNTO/r+t8R/NqAR3A2qPY6lbTMCm2RQ4bK+B/C2Qfstn8qbHa7a/JtTs71eQmUxP+0hyCfcq+P3KWPajxDa6hfNc2yOqsiK28KCzLldwCk8toQc+fKmr2iyfK+HrS9Pxx/JpmPuR3cn4bm/hUYGZw9c95Cp9hVnWO7NrzvLZPuFbGiK9woooqkCsn2hzbbZvuNaysR2oH+jP+zUlsVbi90hu54WvpfOeZxn13SRw/wAgaS9Oi6XHB6/akyf/AGo/9wpL1UQKBRRQFlw5ost7cxWsQ8cjAZ8lHVnPsoyfwp0dqWoRWVrb6HaHbvVe9PQiPP0iMeKRsk/j61x7FNMgstPuNYk8bbJMBcEokfNl9mYgHn5BT5mlmmoSXt1LdzHMkrFj6DyCj2AAA9hXnVnywbPqsrZ3FaNLuOzgrRFhiUY8hWsApOaDxNcWuArbk+o3Mfunqv4cvY0w9D4utbjALd3J5q5A/st0P8D7V+c8QsrhTdR/uXdfdG/vOE17ZZxzR7r7r+osNT1uCAqrsdzcwqqWOM4BIHTJ5DPUggZNYni7TrS9VriFonUIJLhS7xHbnckjKF3EAB8g7M7R4hg1E434jtmInijdthQNKv8AWAMO7VUD9PnGYNIvMHwcn3DC6Zxq9nNLtEzhi23viu8BwveK6lSOZVT+70Oa6DhnCJ0qUbiGY1O0sYfljdae+dcGgnW3j0Zw0/SruK4C9wywzyGNoySdqhiAWI8SMoDMrnmdpIyCQe2sx2l2zqlyUmjbYO+kAicIMNIhwQucZ2ggcxgY6cotZvJHSO3hETyIwjc7VJXGWKkBIgMLgMEyNvI1Xx8Ky92Gdu6YsybXjk5FcHmVUnoQRyxz68jjqM41Z86Tk+WOpHu+GruOWSHuyzRAF9nMYI3DGcEnGeQ5+E+hrZ9n2hInzsx8GI3MkaMSA6DbDudNuWLquEOeZ5jHKjvNd1O3jVWZSMhVnXD52nOwsDtJ65DjdzOepph8KTxXkEsBO2aZUmjOBtbq5jCjb4RI06HmGILHdnnXx8QreHQb6PCbXRPd+y9T0pUpTk0ltr8jL8c3lpeXcTb0SF5WLEvHn9XGDzRmCBmUqSeh5n3qL7VZNrGOzQWYbI294m5Q2wO5RxuORjJBGeucVw4zgCKmI7aNSxCoissoCjae9yB55BHMhgRkkE1P0ycPHG42kGMRkMNwBjRI2QjI8lST0+cxg4Ne0VChSjFaxSS76Hra28rmryReJPb17eQ6OB74zWcZJJKjZz5NjAKbx9fYyZxyzkjA5VWdp9oGtA31ZFP5gj++sjw9xRLaJIqqrmRt5L5+I53EhcZzn26V41fim6uUMcjLsJBKqoHTmOfM/wAa4z/j6kb11oYUebPszrLTgt1TrxlLGFjLzv3+5XdmnEZ03UAHbFtc4jkz0U/1cntgnB9mPpULtm4O+QXpkjXFvcEumByRvpx/mcj2bHlVZrkAKGmfwpIuvaHJa3BxNa4VZm6ZVSYpCx89uVbzxk+ddnbVOeBz3GrNW1y0tnqIOiiivoNSFP3hod9wjKh57Irj/YkaUf3UgqfnZON3Dl6p6f0of+5U/wB9AWvYxc7rdPupoUoOw5vmFpv1jErCiiisiBWK7TUzbP8Aca2tZrjqDdbt9xqPYq3FU+W4QYf5uUj/AOK//akxTs4Qj77h/VbY8zE8rgeeAqSj+KGknRECirHR9FmuXCRqST6CmDY9j87KDI6qfQmmRgjdiXFwtLo2kxHye6IQg9Fc8lJzyw3wn719Ki8Z8NnStQeEA9xJ85Aefwk/CSfNTy+7B867a32U3UKlk8YHpzrZrG2vaO0Lj/lGxwRnq+B4T90igqftrmsZpTXKe9tWlQqxqLoYiN8ivTDIxVVo93uXB5EciDVrWjqQcJYP1S0uI3FFTj1J2nXT95uaUjaGcvgZHQEhQVXqVJJDElU5GuGh8OJc94HnheZ2AY3DLG7AqVQRErIUI5EkLzICjkMmOyg45Z5jHLJz0G0DnknA5V0N93CMHeIK6T7FkLEM4UBgRFkEH4fGeTDAxg19lGpVqR5YvD/lucdx3htvbuVWLSbxiCwsLGG8ddfT3GfDwHb7Yt7NvjIYlAm3I+HYkivsCrhAVwdqLkkgGlV2iXQtbnuoYY1C5UFlDnap2geLOS2N7OfE29eeBV5wR2gNFGved26tkyL3ixsjZIyiyEDaU2HC8t248iedZ2mS21xItyhPd95GX6Zw6hXC4JDYEKHwk85D+HxWFG9pXko3Dc44eH0zlPbp1+iOfqJKClHT31/JWaDeJdZj2BWIAmTJKNHuG51LElWQEtgnA25UjG0xuEdQOBGrESREvGR1Zc5YKOu5SN4Ho0vtVvx3fLFAIU5NKFSTBJUFdskgjB+BPFCAq4GAcjJqj0LRwYVkMcjO7FkeMsGjCEAMuAVLFt3JsfB8S5zW5xGpT20ZlSuK0a0Zp5ku/wBH3009NDSa3dR3Dd8Vjywy7NFG+Dkk92WyNjMS+NuQzEA4OKqbNNslwgUKqyRZUdFkKP3qLy6AiQY6eAdcCvXya43F/la5GMlYYTOpboWwfC32i+efWpFvCqKEVdqjJAzuOT8Tu2Buc4AzgAAAAdSfmlihScHLOmEvI3djR+Nuac7elyRi8yec65Tx+F5nSvhoqPeTBVJrXJZeDu6tRU4uTK/Ut8rJBEpeSRgiKOpJOAK3/aFdx6NpcWjwMDPOpa4ceh+Mn9sjaPsoR6Vz7INIRBNrVyPm4QywDGSx6MyjzP0F92b0qtm4H1DVJ5Ly48Jlbdgnko6Ki+yqAPwrd0YeHHB+XcTu3dXDn06CropqXvY9OFyjqx9AaX+taFPauVkQj8K9eY12Crp+9m47rhm7k+st24/sbP8AdpBU/wDb8k4RweskX59/Nkf7Lj8qoO3YfHi3Wm5S47ILTZbJ91MesYlYUUUVkQKrteg3xMParGuc6ZUj2oBN9lhWPUr+yf4biIPg9DtJVh95En8KS82lOly9sebxyNE33qxU/wAqbnE0n6O1e1veiCTZIeg2P4HJ9cBs/hXHtA0EQa9HLj5u6CyD03LhHH8Fb9+sc6Fa1NbwhoMNjbqWaOPkGmlkIUIp9CeWT0GeXU88YOrksrO/tJEgmBSQFO/hcMwIIPhkGeY9KxnahpV1c2LJbIX7uZHkRfiZFjyAi/SwWDYHPlyz0q97ItCubSyIuBtMrd4sf0kBUDx+jHAOPLz58gQZF4W4FvrOdwb8y2xU7UkDFt3l1YhQPUHnnoOtV+vxnTrhNRiUgKe7uY1+khPiwPMjG4epA8jUbjntUntLtoookKQNiRX+KTkCcEfAMHkefkT6Vo+OFBt7ktyDIjbT9E4xj7+QqaBC94/0yOyvY7+Ha9nfYflgqHI3Ejyw48Y991aKz4asbqMMqmNjzyh5f2TkflWc7NdQi1KzuNDuGwwDPaueq4O7A/YbBx5qWHQV94A1aWCR7O4BWWFjGwPqDjl6g9QfPNaLjdvU5PHpPDW+DYWN3UpPEJNehY33Z/cId0Eqvg5GfAwxzGM5U/jWQ1XT5VglSQR7wGSNZgmEO5kk7uVjgN82T6KSnPL09IZARmuMNhCrvIsaB5PjYKMt95860Fl+oKlDKqrm7dNfP28j6726qXUUqmG/5YXNjtk/OX+L1sEGXdmUguVye8G0llh8G0DdtUOx54ZsYKg904etVcsHZws24Lsfa8eWKplkHjO1dzHCgP8ASIIp76hwvZzc2hUH6yeA/wCzyP40vuKuG1s33bJJISBtYtGoB2yM4YmRCCAoO7awABxzIxv7HjsLup4aXK/P7Hm7exjT5m5Z7aa+5jdXsDcBTJIQVLFiEyWysYyuSF+i2dzDp51TXujHvo7e33s7xhmVyoOcM+SByXMYV9uSRuxkmu15rsizOkSwOveERlYVwRnwgLjxeXxA/jU/T9JZQZLiJWlaVjvdu8DcjuI2ttYhwd27dzI6Y57pZpx/c9EfNONK5rKNvBpyezaa16LRaepZtCqYjWMR7cl413bQxxt8TqHdtpPNsjDjB+KvlfSSckkkk5JPUk+f/wDOVFaitU8Sbkfo3DLL4O2jS67v1f8AcHljioFpp0t/dRWUPxSN4mxkIo5s59gM/fyHnXrU7oIpNbTg5V0fS5NWlA+VXYCWynqFbmh+447w/ZVfM19VnSy+Zmj/AFJxHkh4EHq9/QYzWUAEdnEv9HtNqBfryAYAJ88ZyT9ZjnpVhpF5ZyOYe/gluFBLxI6tsxyICdcDIGSM/d0rP8Gs7WcRVsyOJCGbPOQqxDOR78yayPZFwbqMF8ZJozEsG5XLc+8LKRiMj4hzDbunTz6bE4dml1ns2uxcm6s9RkjZpC7JKWZAGbJVQDgqoyAhHoNw61N434WW4iMbgF9uUfGM46gj/wA9al9pnF76dCndoDJLuCs3NU2gZJHm3MYHTkT5YMPhDiaXUrKOeRAjpO0bFfhkwhyyg8wPHzHPmhppsD82T6XJ8oFuo8bOI1HqSdoH5mnt21FYbKx06Po0iKB9iFAP5sn5Vn+F9FW44jzjKQb5zy5ZHJM+niYH92pnGFx8v17u15x2irF7bj43P35IU/sUzoMajK4Es+7t1HsK01Q9Kg2RqPaplVEYUUUVQFFFFALbtb0DvoGIHPGaz5mfU9CinHiu9ObxjmWPdjD+5LR4b3ZcU29XsxLGVI8qTOg3p0fVisnK1uyI5M9FbPzbn2ycH2YnyrEvQ3fCPEKTwpMh3ZUBwOZBHQgefn/5FceG+1fTrqQQMZYJ2fu1jlQgk5wBuXKgnphiOfLnyysuMIbnQL8mHPyaYmSL0Az4ov3SeXsVqdb9pljIyyz2kZlXo+1dwPqGIyKZwNxja7wdpst18ulid58o4UOQGZAAh2ZAPwr15cufKsp2tcSrFA0O4GSQ5fB6eg/kPwqg1ntcG0rbxhSfpedK3VdTluHLyMSTU3Gx80rU5baeO4ibbJGwdT7jyPqDzBHmCacHHxS5gt+ILNeoVLpB1GDtBb3VvAT5goelJOmT2McSxxTPp1zhrW9yhB6K5G0Z9A48P37fSrKKknF7BPDybDQe0WHYN8cn7u0/zIrQQ8d2LdWdf2kP+7mktxDpsmlXklpJkqp3Rt9ZDnY3345H0IIr4mrp61y9zwGi5NpP2Z1tlDh1xSTm3GXXX8j3g4ssG6XCj9oMv/zAVl+KFa8ulEUsDR92FDMYmRN28SEgnOcbcqB4vCuQN5Cy/SyetH6WT1FY2vCna1PEpN5w1qs4z16HpV4ZYTWFWx8n+CdcaNbq6TIpHcylAsYASTYztHucuzq+EDMSDlXXHv8AYY9oA9Bj+ABIHQZ2jOPQelV/6VjznIz619/SyetbarKrUSWD6+GULGzcpc6k29PJdPffUs68StgVX/pZPWq+/wBX3eFMknkMf3V5Qt5yeMGyueMW1Km5c2TQ8FcPHVL9YjnuIvnJz5bR0TPqx5fdk+VRe1ni8aheYiP9Gt8xQgYwcHDSDHkxAx9lV961mvSfoLR1s1OL6/Becg80UjBGR6A7B7lyKTdbiEFGOEfnF1cSuKrqS6j17IuJFkhFuWAdTlM/yrYax2mWdlcLb3KzRhkD95s3JnOCvhyTj1ANfmXTdRkgcOjEEelMzTu1GOSMRXkCTL9tQf4HlV2PDcb2u6fp+r2sTSEvBymjdWMZ5qRkk8wME5B/uqpvbi10602xL3cMQYRKSSWLZJc55nmT19/LFYmbtVtI0CwW6jaMKOQC/sgdKo9Aa64gv0ikJEC+ObGQAgPwjHQsfCPvJ8qmc7DY3/A7rp+mXOrzj5ycGVQepQeGBB+2x3fvj0qq7HtHdy11LzklYyMT5ljkn8zR2rap8su4dJt/1UBV5tvTdjwR8uWFU5x6sPMUzOEtKWCFVA8qvkPMvVGK+0UVkQKKKKAKKKKAKXnafwqtzCxA54yKYdcriEOpBqNBCd4ddNa0+TSbtgt5bAGKRuZIXkkvPmcfA/qDnqeSQ1XTZbaaSCZCkkbFWU+vt6gjBB8wQadnHvDc9rOt9aHbLEdwI8/UMPNSMgj0NSdX0u14msvlEAWK/hG11PI5/wA3IfNDzKv5f2hRMrR+f6t04W1EqGFjdFSNwIglIIIyCDtxjHnVffWckMjxSoySISrKwwQR5GnD2jX0ccdv/wAp3VvN8ghKQRCQI5w2CzKwAJPI8uiiqQVFloN5NGZorWeSNerpG7KMdfEBjlUfTrCedxHBFJJJ1CxqzNy88Lzx702OLNVubXU9Lt7SV0t1itBCiMQjh2wxIHJy3Qk5zUzipVtLXWpLI93Ib2KOR4zhkRkjZgCOagyu45euKA+xcYx3CxW+o6JcXV7BHh/mstjON5UjcAeRPLGScV6k1PS1KhuF7kFjtUG3I3HBbC8uZwCcDyBrO8Satc/obTbszyrdFp4RKHdXeIMThmBBZQVTrWsvL+Y8WxwmWQxAhhGXYoD8jbmEztB5nmB5n1oCu1DXtHgXdNw3NEpOA0kIQZ9MtgZriOKdCMRn/wAX5O5B2mXu12A+hf4c8xyz514uLqObSdRS1vp74juXlF1vHdIHJ3Qht25iRz8Q5DPUYOlsOGbj5F+iDGohax3bjJHkXZYzY7vdvwCQM4+jQGbfi3QFjWY6A4iclVkKIFYjqFboSMdBQ3F2gCMTHQH7otsEmxNhbGdofpuxzxVBrwI4d08HkRcz/wA3rne/+jUH/WDf/SegLz/Hvhv/AEJ/CP8A76tTxLpVssd0eHZ4lBVklMQVQcgqQx5dcYpX8AQRSalZpLgo08YIPQ8/Cp9icDHvWs1fiDV2v9VgUNOhFyskMhJSOJWwJEXcApVduGHrnnmgMpx1qt1d3b3VxG8ZmAeJXDDEXSPZnquB8Q5E7j51VSaZcK6RtBKHkCmNCjBnDfCUXGWB8iOta/tY+LTf+q7T/wC5Wm17nrWh455trAj7t786AWNpw9fSgmO0uHCsUYpDI2GHVTgcmGeYqFdW0kTGORGR15MrqVYefNTzFOWO5hTTbhpb24tFOrXGJLcMWY7PgO0jw9T+ArLdsQklvbd1HeJNawGBxlnmU52vINoPesT0x6UBhLK0kmkWKJC8jkKqjmST0Ar9BokXDOlbRte+uOnnukx+fdRg/j7FqjcB8JW+hWranqJAn2+FeRMeekafWlboT5dOmSabRLS61m9N9cjC9Io/KNM8lHqfMnzP5VGypFz2U8KuM3E2WkkJdmPUknJJPrk030XAxUbTbJYkCgeVS6JBhRRRVIFFFFAFFFFAFFFFARNRsVlUqRSY4i0G70y5+XWJww+JceF180ceYP8ADqKeVRNQsUlUhhUaKhWahpun8T2/exEW9/EMMrdV+xIB8cRPRxzH5rSh4+Goi4WO/TbJDEkKeEAFEztKkcnHM8/w8qafFvA09vL8rsnaKZOYZeX4EdCD5g8jUmw4ysNTQWGswJFN0RzkIzY+KOTrE/sTg9MnOKJjAqdJ7Q9St4UhjkQiMERM8aO8QPURuwJA9vKq7QeKryzkkkikyZsiZZAJFlySfnFfO45JOevM+pra8a9jV5a5ltM3UHXA/WqPdB8Y6c15n6opYupBIIIIOCDyIPmCKpC14j4jur51e4cHYuxFUBURfqoi8gKlvxpem/GpF1+Ujo2xcfB3XwdPhNZ6pGniMyxiUkRF17wjqFyNxGPPGaA0t/2jajLH3ReJYyyuypDGgcqQyh9o8S5A5edVK8S3Yvf0h3n9I7wybsDGT5bem3HLHpTDaw0UzlAlooKlQ/yiN41XvcLIU79ctszkCTvByOzJxWc1OSNrvTmt5LOPEFuO8LAoroMM06sWKkMPpKCeXXrQHC07SdRjQxgwlTJJLtaCNgGkYu5AYchlj9wr5Z9o+oRq6KYCjyNMVaCJgGbqVBGB06Ctbeako3RQ3kHypIoEju5J4N0qrO7z75A5VB4o8RsxYohHiztrxcavp5WVhJF8hKXga3DKrvK90zwMsPJie77na4GECEZHmAs9S1OWedrhiFkYhsooQAjABULgDoOlX2rdompXELQySpiRQsrrGivKB0WSRRkj+dW3afe28yq0cysflE3dIs0cw7khdkg2jNuDgL3Jxjb8IOSV9QGwj7SdREaRfMMscaxLugiYhVG1RuYZ6V4sO0bUoYUgSRMRrsido0aSNcY2xyEZAxy9qyVb7gvso1C/Ku6m3gPMySAhmH/Rx9T95wPc0BA4P4o1RFFjaIku+QyBGhSUliApbLg4GBzJ5DnTlg0+HTR+ltZnWW82hIwAMR8jiG3jGAX5nxeWT0GSYU+s6Rw+htrKP5ReMMMAQzZ9Z5ByUfYH5DOaotJ4avtUuBd37lj9BOioOu1F8h/E+eajZUjkBe69dLPOpS3Q/Mw+Sj6zfWc+ZpzaBoyW6BVAGBXrRdGjgQKoAwKtKJAKKKKpAooooAooooAooooAooooAooooDnNCrDBFYbi7s/guVJ2jPrW9oqNDIibK51rRjtiPyi2H9TJk7R6Rt1T7uY9qtpOIuHNX8N/CLW46bpfmz+7cLgED7ePupq3enxyDDKKxfEPZxbTg+AflU1RdDC632DsRvsbtXU8ws3LI9pYwQf7IrBat2b6xb532UrDOMxASg+/zZJA+8CmEeBdRsSWsrqaIddqsdp+9D4T+VSYON+IrbAmihuAOpKFGP4oQv8As1cjAjrm2kjO2RGRvRlKn8jXKv0GnbG3S50qQfsurj8mUV4Pafojn5zS5c+ptoG/3qZRD8/10t4Hc7URmPooJP5Cn5/lO0JPg0uXPtawL/HdXR+2RAMW2lzH9pkjHt8IamUBRad2eaxOMpYzY6eMCL8u9K8vfpW30HsIu3w13cRwr1KpmRvcE8lH35armftE1645QWkMAPmQ0jD8SQv8KhPwvrN//wA8vJWU9UB2J+KJhT+VMlwy2jbhjRD4MXVyvTGJ5Mjl1HzcZ5+x++q3UeKta1UmOBTZ255eAkyMPtSeX3Lj8a03DvZdbw4JQE+9b2w0iKIYVRU1Y0F9wZ2aRQYZly3Uk0ybS0SMYUV3Ar7VSJkKKKKoCiiigCiiigCiiigCiiigCiiigCiiigCiiigCiiigPLID1FRZtNibqoqZRQFJPwxbt1UflUJ+CrY/QX8q1FFTCLlmWXgm2+ov5VLg4Vt1+iPyq+ophDLIEGkwr0UVMSJR0Ar3RVIFFFFAFFFFAFFFFAFFFFAFFFFAFFFFAf/Z" alt="Academy Logo" className="h-10 w-auto mr-2" />
          <div className="text-2xl font-extrabold tracking-wide text-yellow-300">
            Rising Sun Football Academy
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-semibold">
          <li>
            <Link to="/" className="hover:text-yellow-200 transition-colors duration-200">
              Home
            </Link>
          </li>

          {/* About Dropdown */}
          <li className="relative group">
            <button className="hover:text-yellow-200 transition-colors duration-200">
              About
            </button>
            <ul
              className="absolute hidden group-hover:block bg-blue-700 text-white py-2 rounded shadow-lg mt-1 space-y-2 z-50"
            >
              <li>
                <Link to="/History" className="px-4 py-2 hover:bg-blue-600 block">
                  History
                </Link>
              </li>
              <li>
                <Link to="/Achievement" className="px-4 py-2 hover:bg-blue-600 block">
                  Achievement
                </Link>
              </li>
              <li>
                <Link to="/Vision" className="px-4 py-2 hover:bg-blue-600 block">
                  Vision
                </Link>
              </li>
            </ul>
          </li>

          {/* Team Dropdown */}
          <li className="relative group">
            <button className="hover:text-yellow-200 transition-colors duration-200">
              Team
            </button>
            <ul
              className="absolute hidden group-hover:block bg-blue-700 text-white py-2 rounded shadow-lg mt-1 space-y-2 z-50"
            >
              <li>
                <Link to="/Boys" className="px-4 py-2 hover:bg-blue-600 block">
                  Boys
                </Link>
              </li>
              <li>
                <Link to="/Girls" className="px-4 py-2 hover:bg-blue-600 block">
                  Girls
                </Link>
              </li>
              <li>
                <Link to="/Coaches" className="px-4 py-2 hover:bg-blue-600 block">
                  Coaches
                </Link>
              </li>
            </ul>
          </li>

          {/* Contact Us Dropdown */}
          <li className="relative group">
            <button className="hover:text-yellow-200 transition-colors duration-200">
              Contact Us
            </button>
            <ul
              className="absolute hidden group-hover:block bg-blue-700 text-white py-2 rounded shadow-lg mt-1 space-y-2 z-50"
            >
              <li>
                <Link to="/location" className="px-4 py-2 hover:bg-blue-600 block">
                  Location
                </Link>
              </li>
              <li>
                <Link to="/Support" className="px-4 py-2 hover:bg-blue-600 block">
                  Support
                </Link>
              </li>
            </ul>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center focus:outline-none text-yellow-300"
        >
          {isOpen ? <XIcon className="h-8 w-8" /> : <MenuIcon className="h-8 w-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 py-4 space-y-2 text-center text-white font-semibold">
          <Link to="/" onClick={toggleMenu} className="block hover:bg-blue-600 py-2">
            Home
          </Link>
          <details className="group">
            <summary className="cursor-pointer py-2 hover:bg-blue-600">
              About
            </summary>
            <ul className="text-left pl-8 pr-4">
              <li>
                <Link to="/History" onClick={toggleMenu} className="block hover:bg-blue-600 py-2">
                  History
                </Link>
              </li>
              <li>
                <Link to="/Achievement" onClick={toggleMenu} className="block hover:bg-blue-600 py-2">
                  Achievement
                </Link>
              </li>
              <li>
                <Link to="/Vision" onClick={toggleMenu} className="block hover:bg-blue-600 py-2">
                  Vision
                </Link>
              </li>
            </ul>
          </details>
          <details className="group">
            <summary className="cursor-pointer py-2 hover:bg-blue-600">
              Team
            </summary>
            <ul className="text-left pl-8 pr-4">
              <li>
                <Link to="/Boys" onClick={toggleMenu} className="block hover:bg-blue-600 py-2">
                  Boys
                </Link>
              </li>
              <li>
                <Link to="/Girls" onClick={toggleMenu} className="block hover:bg-blue-600 py-2">
                  Girls
                </Link>
              </li>
              <li>
                <Link to="/Coaches" onClick={toggleMenu} className="block hover:bg-blue-600 py-2">
                  Coaches
                </Link>
              </li>
            </ul>
          </details>
          <details className="group">
            <summary className="cursor-pointer py-2 hover:bg-blue-600">
              Contact Us
            </summary>
            <ul className="text-left pl-8 pr-4">
              <li>
                <Link to="/location" onClick={toggleMenu} className="block hover:bg-blue-600 py-2">
                  Location
                </Link>
              </li>
              <li>
                <Link to="/contact/support" onClick={toggleMenu} className="block hover:bg-blue-600 py-2">
                  Support
                </Link>
              </li>
            </ul>
          </details>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
