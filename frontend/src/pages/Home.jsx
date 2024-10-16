import React from 'react'
import homeImage from '../assets/mainTeamImage.jpg'
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';


const Home = () => {
  const {isLoggedIn} = useSelector((state) => state.auth);

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center bg-slate-500"
      style={{ backgroundImage: `url(${homeImage})` }}
    >
      {/* Black gradient overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content on top of the gradient */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full -top-10">
        <h1 className="text-white text-5xl font-bold">Rising Sun FA</h1>
        <p className='text-white py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit tempora aspernatur quis?</p>
        {
         isLoggedIn ? (
          <Link to="/admission" className='rounded-full bg-yellow-50 text-black py-3 px-6 font-semibold flex items-center'>
          Join Now <MdOutlineArrowOutward className='ml-2'/>
          </Link>
         ) : (
          <Link to="/login" className='rounded-full bg-yellow-50 text-black py-3 px-6 font-semibold flex items-center'>
          Join Now <MdOutlineArrowOutward className='ml-2'/>
          </Link>
         )
        }
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center py-10 bg-white">
  <div className="flex flex-col lg:flex-row w-11/12 bg-white shadow-md rounded-lg overflow-hidden">
    {/* Left Side Image and Stats */}
    <div className="relative lg:w-1/2 w-full">
      {/* Overlay Box for Professional Footballers */}
      <div className="absolute top-6 left-6 bg-blue-600 text-white text-center py-2 px-4 rounded-md z-10">
        <p className="text-xl font-bold">230+</p>
        <p className="text-sm">Professional Footballers</p>
      </div>

      {/* Player Image */}
      <div className='w-75 rounded-md '>  
      <img
        src="https://www.shutterstock.com/image-photo/leipzig-germany-june-18-2024-600nw-2480454921.jpg"
        alt="Player"
        className="w-full h-auto object-cover" // Ensures the image is responsive and doesn't overflow
      />
       </div>

      {/* Lives Impacted Box */}
      <div className="absolute bottom-6 left-6 bg-green-500 text-white text-center py-2 px-4 rounded-md z-10">
        <p className="text-xl font-bold">1200+</p>
        <p className="text-sm">Lives Impacted</p>
      </div>
    </div>

    {/* Right Side Content */}
    <div className="lg:w-1/2 w-full p-6 lg:p-10 flex flex-col justify-center bg-gradient-to-b from-gray-50 to-white">
      <h2 className="text-3xl font-bold text-blue-700">Academy</h2>
      <p className="mt-4 text-gray-600 leading-relaxed">
       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem doloremque consequatur nostrum culpa, beatae labore esse distinctio reprehenderit consectetur totam omnis provident, commodi quibusdam eius dolor, dolore sint. Itaque, consequuntur.
      </p>
      <a
        href="#"
        className="mt-6 inline-block text-blue-500 hover:text-blue-700 font-medium"
      >
        Know More
      </a>
    </div>
  </div>
</div>

<div className="bg-white py-10 flex justify-center items-center h-screen">
      <div >
        <div className='flex justify-center pb-4'>
      <h1 className="text-4xl font-bold text-blue-700 mb-8">Leader's Message</h1>
      </div>
  <div className="w-full max-w-7xl overflow-x-auto flex space-x-8 px-4">
    
    {/* First Leader Card */}
    <div className="min-w-[300px] bg-white shadow-lg rounded-xl p-6 relative">
      <div className="flex flex-col items-center">
        <img
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhIWFRUWFhUVFRUXFRUVFRgWFRUWFxcXFRUYHSggGBolGxUVITEhJSktLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lHyUvLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIANsA5gMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwEDBAUGAgj/xABPEAACAgEBBAYECAkJBQkAAAABAgADEQQFEiExBgcTQVFhInGBkRQjMkJScqGxCDNDYnOCksHwFlOio7LCw9HhFSRjg5MlNURUVaSz0vH/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIEAwX/xAAkEQACAgEEAwACAwAAAAAAAAAAAQIRAxITITEyQVEEIgVhcf/aAAwDAQACEQMRAD8AnGIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIlvUXqil3ZUVQSzMQqqBzJJ4ASJemHXEBvVbOUNzB1Lg7g86q+b/WbA8mEhyS5ZKi30SptHaNNCGy+1KkHNnYIvvPfOB211yaGoldOlmpI+cB2dWfrP6R9YUiQhtPaN2pftdRa9z9zO2ceSjkg8lAExpnln+HeOH6SLtHrk2g/wCKropH1Wtb9okD+jOf1PWDtWz5WusH1Vpr/sIDOZlRObyyfs6LHFejbP0o154nX6vx4am4D3BsT3T0u2ihyuv1Ofzrnce5yRNKYldcvpOmPw6zT9ZO1k4fDWYfnVUN9vZ5+2Zg62dq/wA5SfXSP3NOHgS27P6Rtx+Ei6brl2ivy69M48ksQ+/tD9032zuu9OWo0Tr51WLZ/RcJ98hyJKzSIeKJ9L7C6xNm6ohU1ARz+TtBqYnwUv6Ln6pM6qfHpGeHdOo6J9PNboSBXYbaRzotJKY/4bc6z6uH5pnWOdPs5Swv0fTUTn+h3S/TbRrL0kh1x2lTcLEJ5ZHep44YcDjxBA6CdziIiIAiIgCIiAIiIAiIgCIiAJrOkW3qNFS1+ocKo4AfOdsEhEX5zHB4fuE97e2xTpKH1F7bqIMnvJJ4BVHexOAB5z5p6X9J7toag3W8FGRTVnK1Ie7zY4BZu/1AAUnNRReENTMzpt031G0Xw/xdAOa9ODw4cmtPz3+wdw7zzESsxyk5O2aoxSVIoTESsqWKRBiAIiIAiIgCVlBBMAoZWAIEAzNj7Uu0tyajTvuWJyPcR3o4+ch7x9xAM+mehvSWraGmXUV+ifk215ya7B8pT5cQQe8EGfLc6/qt6THRa1Q7YovK1WjPAEnFdn6rHB8mPgJ2wzp0zjlhatH0jERNZmEREAREQBERAEREASjEAZPADmZWRl12dKuwoGiqbFuoBNhB4pRnBHkXOVHkH8pDdK2Slboj3rN6YnaGo3az/u1JIqHc7cjcfXxC+C/WM40xEwyk5O2bIxUVQiIlSwiIgFDKgSglYAMRKQQVgRKwSUMoIlYAiIgCGGeB7+ERAPpLqs6Q/DNBWznNtPxF2eZZAN1z9ZCjeskd06+fPPU70i+C64VOcVaoCo+AtBPZH2ksnrdfCfQ03QlqjZjnHS6EREuUEREAREQBERALepvWtGsdgqIpZmPIKoySfIAGfKvSXbTa3VXapsjtGyqnmtYGK18iFAz5k+Mmrru232OhGnU4fVN2fn2SYa0+o+ih/SSA5nzy9GjDH2UiJWZjuUiIEArPMqZ5blCIKLZyx35/0nuWvoe73j/8l2SwikrEqBIJEoZ63TKis+EA8RLyaYmXk0RkakTTMOVxNkmz5fTZ/lKuaLaGagVmXa9MTN3Xs+ZNWkEo8pZYzT07PJ8R4EcCD4g9x859A9XnSj4ZRuWkfCaQFuHLeHJbVH0WwfUQw7pDyoBwlxNedM6X129lYmdx+YxzZXHzkIHEeWeBAIvh/IcZU+mVzYFKPHZ9ExOT6GdNk1vxbVPXcBxwjtS2Bxau7GAPzWw3kec6yemnfJ5zVCIiSQIiIAiJ5scKCx4AAknyHEwCDOtXUnU7QdM+jp0WlR3bzAW2MPXvov8Ay5xr7Om6XUG3eubO9cz3HPMdqxfHsDY9kqV/j988jLlbm2erjxpQSOdbZ8tNoTOlFQnl6h++UWRk7aOZOiModGZ0vwcTy2nH8eMtukbZzR0hm06N7B+EaqqhgdxjvWfok4t7/RX9cTPTTjM7Xq42aALdSR8s9jX9SsnfI9dmQf0YnSE22UlCkRZq9ksjWV49Kp3T1mtyPcd0ewz3VosgMORGR6jJC6dbK7PUC8D0L8Bj3C5FwM/WQe+s+M5OhNxjX3HL1+YJyy+xvsI8JE5O6JjFGuTZ+TL67Om2RMT0ROTyM6KCNUNBLqaETPCz0PGV1snSjGGkAntaB/lLwlfulbZajwtQ5+6esfx5z1n/AE9UZgkpjA8zK8pQN3+6eWsEAuDxni1QysrcmBB9RGJj26sTCv18lRbKuSR9E9Dtcb9DpbW+U9FZf64UB/6QM3E4jqb1fabMQHmlt6eztWcfY4nbz3E7VnjtU6EREkgREQBOd6wtWatm6pgcFqjUp7w1xFSkeeXE6KcF10awJoFU/lNRSv7BNv31CVk6i2WiraRGHAcPD+MQ01CbRl6vXCeLoZ6+pG0niYY1onv4UPH+P4zI0snUjJJnh/49v+ksrqBHbj937zFEWXH3segAXYhEHcXdgqD2sQJL2ydnrRTXSvEVoqZPMkDix8yck+Zkd9CdL22sQ/NoU3N9Y5SoEe2xvXXJLbX1A7u9vN9BPTf9lckDzOB5zTij+pxyS5Mfauzkvqemwei4xkcwQcqy+DAgEHxEiTaWznR2ouwLayCrLwBBzuWoPotggj6y90mdd4qCy7pPNcgkeRI4ZxzxkZ7zzmi6V9H11dYwQtyZNVngTzR8c0bAyPIEcRLSjZCZGGm1O8Srei68x3Y+kviD/pL+ZrdoAqzVWqa7a2wRkbyHA4g94I455EGYn+1SnCwjHc4GAfDeHzT9n3Tg8bfR01pdm8z3fx5ypaaf/aI8ZbbaMrtsnWjdNaBPB1AmhfXmWW1plliZG4dA+sExn14mibUEzyXMusRV5Dc2bRmNbtCa3M8yyxoo5syX1RMss5M8xLUVsm78H+/Ol1KfR1Ab9umsf3DJTkN/g92elrl8tMwHr+EA/cJMk34/FGKfkxERLlRERAEij8IG74jSV+Nzv+xUV/xJK8hr8IOw7+iXuxqWI9RoA+8ymTxZeHkiJMz0HM8xMBsLgvMG9vpH7P8AKWpQSaQsv/CD4n3/AOUqL/M/tN/nLEsX6oLkDif3+clRvoOVdky9V2w6zpTfbUrNc5ZS6hiET0FAz3ZDt+vJG0tSqMKAB4AAD3CQxsnrYooqrpXR2blaKgPaLn0VAzjHfidVsfrb2dYQHNlB5fGJlf2kJA9uJ10MqpR+nfXJMR1l/Ra6q5BZVYliHkyMGU+0cJg371dnpHeqsbAJ512NyUnvRjwGeTEDiCAtGiyZz3TLojXrU3gRXegwlmOY57lnimfaM5HeDCm0NLZU7U3IUdThkP3g8ip7iOBn0kROe6X9FatdXhvQtQHsrQOK5+aw+ch7x7RgyP8ASWvhDmxfgjkVarepzgJqa/meAvrPoun54ww7yRxG0210B1tA30UamrGRZT6RK8wTV8rj+bveuaDamzbdPa1N6bjr7VYdzI3zlPj78EETqegPTh9Gy0XktpSfMtTn5yeKeKd2cjwNrvsp10cYeBIPAjmDwIPgQeIgz6B2p0c02vIstrSyoKDVYpG8++oO+LUO9uAEYGeJyccFMi7p70U0uhya9au9zGms9K7B5bprHAeG+o+tI0/BddnHiJhPrvAe/wDylv4Y/l7pO3IruI2MTBr1p+cPdM1WB4iVlFospJ9FSYECDKliV/wffx2t/R6f+1dJqkLfg+Ke11p7gmmHva/H3GTTN2PxRjyeTEREuUEREASFvwgvx2i/R6j+1RJpkMfhBr8boj+ZqR7jQZTJ4svj8kRNEShmE2AxEQDH1lu6OHM/dNdMvXglgPKdJ0B6MV6rUMt+SiVl2CkrliwVQSOOPlcvCaIUkcXFzlSOQJlN4SfKtgaWoYr09S+e4pPtY5JlDsmluDUVMPOtD+6N1X0bI/x0mr1EJbI2vqNK/aae56m7yp4HHIMvJhx5EGTH0J62a7yKNcFpsPBbhwpY+Dg/iz58vVMk9A9n3fK0wU+NZas+5Tj7JrdodSlTDOm1Tofo2qti+reXdI9xlm4tcmeeCeJkpWVywwmj6u9j63S6dtNrGRxWQKHVy/xZBynEAgKRwyORwOAnSvVODVExlaOc6T9HKdbV2dowwya7B8utj3jxB4ZU8D7jIQ29sa7R2mq8YPEq4+Q6j5yH7xzB9k+jGrmg6Y9GU19K0u+4BYr7wUM2AGBCk/JzkcfLHfIXxkv6iD9D041unofTae4pWxyDgFkzneFTH5AYnJ8+Ixk55p7CSSxJZiSSTliSckkniSTOk290ZfRXGm5c96Wcd2xPpKO4+K9x8Rgnu+p3blNdh0b11qzlmpt3VDk4y1TNjJ72X2jwneMldHDQ32RhVsHVsMrpNQw8RRaR7wssarZt9X42m2vu9Ot04+HpCfUmunLbf0K31PTYPRcY8we5h5g4Pslpy0muH4WpcPk+epmbPfiV9sy9TpCGauwemjMjHzU4yPI8D7Ziaekq/sJzObkmmjKouLM2IicDsTJ+D5R6Gss8Xpr/AGEdv8WS7I66itJubOZ/53UWt7EC1f4ZkizfBVFGKb/ZiIiWKiIiAJEn4QVfxejb/iWr+0in+5JbkadfdGdDS/0NSh9jV2r95ErPxZaHkiCjBiUJmA2lJUwIgFN0Zz3yReqDT5+FP+hT3dqx+8SOzJS6msdjqR39qh9hrAH3H3S8GTHhpm728tpNOnoYJbqbRSrkb3Zrus9lm73kIjYHiROhq6sNmYHaVPa/fbZfcbSfHeDDB9QE1HSpjR8H1oBI0uoS2zAyexZWqtIHfhbN79WSD6F1YZWyjhXR1PccMrofcRNOOqs4/lZJSl3wcdqOhN9Hp7P1TYH/AIfVFrqj5Lb+Mr97DyluvpX2B7PaNFmjbkLG+M0rfV1CcBy5OF5idXpdpkWCi8BLDns2/J3Acc1k8mxxNZ4jBxkekdi6AgggEHgQeIPrEtKCZxWWfVmm0mrrtUPVYtiniGRgyn2jhLxE12s6BbOdt9dOKbOPp6d30zZPeexKhj68zG/kVan4namtTwFjU6gD221kn2mc3hfpl1lNwa5Ytqmu/kvr/wD1ezHj8E0u9793H2Qehdr8Ltqa1x3is06cH21Vhh7DK7LJ3karpnoNLbp2TVulS80sZlUo/cyE9/l38pBF1b1PwYgqQ9dgV03gGO5dXvgHdJXIPiPKfTGzOg2z6X7QacWW/wA7czX2ZHeGtLbvsxNb1n9GK9dQEQD4WmW0+MZI4byN4VngMngDunnwNtnjvkjet9Gk6FdLk2hUwK7l9QAtTuOeViH6JIPDmOXgTsNVppE3VgXTa1IxulxdTareiw3UZt0g/ODVjh5SdNRpobUlyb8GauGQH09oCa6wAfKSpz6yCv8AcE5+dL1j3Bto3AfMWus+ZCB/7+PZOameXZxk7k3/AGJRmxxlZsOjmy/hWro02Mi21VbmPix6VnL/AIavIirdFW6Vn0h1fbONGzdJURhhSjOPz7Bvvn9ZjOhlAJWegYRERAEREATiuuPTb+ybz3o1NnsW5N7+iWnazT9MdCb9BqqRzfT3Kv1ijbv24kPklcM+V5SFbIB8Rn3xPPNwgREASRupi/09VX4rS49hsU/esjmdT1Z6/stoVgnhar0nwyQHXPtTH60lEE3lAwKsAQQQQeIIIwQR4TQdF9Y2y7hor2J0Vrn4FcxyKnY5+DWseQ5lSefEerfgyup0td1bVXIr1uMMrDII/jvl8c9LIyQ1I6DX6Ku5DXagdDjIPiDkEHmGBAII4ggETU/B9Zp/xTDVVDlXa+7qFHglx9G3uwLMHnlzNFo7NfoPRQHX6UfJUsF1lS/RDMQt6juyQ3mcTYaXrD2exC22tpX59nqq307e+wBT7DNakn0ZHFrs2lHSOgndt3tO/Abl6mrie5XPxdh+ozTao4IyCCPEcRMXSbS094zVdVap+g6OD+yTmW32HpTz09X/AE1B+wSxU2BM1er6Q6WtihuVrB+SrBuu/wClUGf7JVuj2kPFtNU3f6SK33iedbtPRaJPjbaNOvcGZKgfJV4ZPA8BALHwjWX8K6/gtf8AOW7r3EeNdKkqmRyLnI70lva20tNs2k2OWZ3OFHGzUai35qL3se4DgqjwAmru6ZXaj0dm6VrAcf71qFanTDPeqtiy71KAOPOY+g2BuWHUai1tTqmGDc4AVFPzKKxwqT1cT3kznPIonSGNyIw6XafU6TVU7VuVVe27trK68FamTB7IN84tUGBbvZWPeJNer1KKhsLegFLlu7dA3s+6cp1gbPF2g1C4yUQ2r9ar0/tAI9s5Pb/Sf/sLS1B8231iluPHs6DuWsfXuBf1/KZ7tWaK0uiO9drTdbZc3O13sIPdvsWx7AQPZLEGJzZYqJKfUNsTfvu1jD0al7Gv9I4DOfYm4P8AmGRdVUzFURSzsyoijmzMQqqPMkge2fUnQ3YC6HR1aYcSq5sb6VjHedvVvE48sCdsEbdnLNKlRu4iJqMwiIgCIiAJQiViAfI+09H2N11GMdlbbUB5I7KOfkBMadh1t6Dsdq345Wiu8frJun+lW3vnITDNVJm2DuKKGIiULFRKpYykMh3WUqysOYZSGUj1EAzzEAlLon1n12Ba9cBU/Lth+JY8vT/mz9nmOUkam0EBlIZSMggggjxBHOfMZ4HyP3/6zabE27qtIc6a4oM5NZ9Oo+tDy9YwZd0yE2j6Tqsl22pXXddVZTzVgGB9YMjDov1j3Xbwt0Nj7gUvZpvjAM54mpsEcs4BY8+E67RdONnsd06lam+hcGof3WgS2llXKJTX9X2y7c7+iqBPegNR/qyJ5o6CaasYqu1lS/Rr1moVfdvTotPq63GUsRwe9WVvuMv4jVL6V0o5r+RdB4PfrbB4PrtSR9jiZezeiehobfq0tQfnvlQ9mTzO++Wz7ZtL9VWnF3VAOZZlX7zNFrenOzqzg6ut2zgJVm5yeWAtQJk3Jioo6IzF1WACSQABkk8AAO8nunA9J+s+ygL2OgtG/vblmp+KUkeFa5Y884JUyMOkHSXWa0/7zcWTmKl9Ckcj8gfK5c2JMq1XZaMvhIHS/rHpVXp0gXUOQVaz8goIwcEfjDx5Dh590iamvAHPOBz7vL3kn2y4BKSur0i1e2VgCJ1PV90Os2jfggrp6yO3sHDz7JD9M/0Qc/RBRi5OkRJpK2db1JdEt9/9o2r6Cby6YEfKfir2+peKjz3vASa5a0mmSpFrrUIiKFRQMBVUYAA8MS7NsYqKpGSUtTsRESxUREQBERAEREAhn8IDZuH0uqA5iyhz38MWVj/5pEgn0b1wbN7bZd5A9KndvXyFZy/9WX98+cxMmdc2acL4oSkROJ2EQYgFGGeBlM4XJ44GfdPUMO6CCcuh+yF02lrrwN9gLLSPnWOAW494HBR5KJe6U1qdHqd8AgUXHiM4xW3Hymh6A7Z1eoozYtRSthUbCWV2CqCTugFSQCOORk5m46R2OyGnsLGqfdFtqBXC1FvjR2QbtGYoCBuqeLDwnoJquDE1zyXm6G7PdRvaKjJAzu1qndx+TiWv5A7M/wDJ1++z/wC06DQ66m8FqbFcA4YD5Snnuuh9JD5EAy+VmK5I3JROfp6GbOXloqP1qw/9rOZTaumrrfSIipWguZiqqqKd2i0IuBgfKdT61E3trhQWYgAAkknAAHEknuE5/TJ8JddTavoKc6athxAP5d1PKxhyB4qp7iTL405SKZWoxMfpxs9btFeCMsiNah8HrBYYPdnBX1MZCIkydY21Fp0ViZ9O8GlB5OMWH1BN72keMhyWz9o54emUMS0lvPv8APAfYJ6Kk8+XgP3nvnCqO1nYdA+gd+0WD8atKCQ93e2Oa0gj0mzwLH0Rx5kYn0PsfZVOlpSiisJWgwFH2ljzZjzJPEmcx1OIBsjT47zef/cWztJthFRXBknJt8iIiXKCIiAIiIAiIgCIiAWtVp1sRq3GVdWRh4qwII9xnyXrdE1FtlD/ACqnepjjGTWxXex54z7Z9cz5u62alXa2p3RjPZMfWaUyfsnHOv1s7YX+1HHwIlRMhpKRAiAP4Hecnlgd5nYbH6u9VaA9rLp1PHdYF7ceaAgL7TnxAmP1a6dX16b6g7lVli57nUoA3rAY++TJNGLGmrZnyZGnSOa2R0QSmo0nUXvWxJZN5alJbG9xrAfBxy3sTN2ex09g0zklGydMx4nAGWoY97KMlTzKjvKkncTT9LeGkucfKrXtUPer1+krD1Ee3iORmg4F3X0VNcgJau8qxruT0XwpG8u/jDcwdxsg4JwcGZuz9qurinVboLHdqvUYrsPcjr+St8uTdxz6IajTq5QsMlGDoeIIbBXIx5Mw9RMprqFsrdHGVZSCPZ3EcQe/I5SsoKReM3Ex9sN8Iu+DD8VUVbUHPyn4MlHqwVd/IoOIZp7v2pStXbb4KZwpX0i7b26FrA+WxbgAOcwdk6dW0KA5+Np3rDvMGZrRvWMXBzvEsTnOeMt6JA2tuVgCunrpFC8lr7RWDFVHDJCgZ5gZAwCZMY6VREpanYGwU1ANmtqV3cDdrb0hQnciMOTccsw5nhnAE1Or6tNG34t7qvIOHH9YpP2ztIktJ9kJtdEG9KejdmisCMd+twTXYBjOOasO5hkeRzkd4Gmkr9a9QOjRiOK3Junwyrg/ZIomPLFRlwasUm1yfSnVShGydJnvRj7Gsdh9hE6ycv1Yf91aP9CPvM6ibUZX2IiIIEREAREQD//Z" // Replace with actual image path
          alt="Brahmanand Sankhwalkar"
          className="w-20 h-20 rounded-full object-cover mb-4"
        />
        <h3 className="text-xl font-semibold">Jayesh Mahajan</h3>
        <p className="text-sm text-gray-500 text-center">
          Former Indian Football Team Captain, Padma Shri and Arjuna Awardee
        </p>
        <p className="mt-4 text-gray-600 text-center">
          I have been associated with SFA since early years and have seen the
          academy grow into what it is right now. SFA has nurtured brilliant
          football talents...
        </p>
        <button className="absolute bottom-4 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center">
          +
        </button>
      </div>
    </div>

    {/* Second Leader Card (Highlighted Center) */}
    <div className="min-w-[300px] bg-green-500 text-white shadow-lg rounded-xl p-6 relative">
      <div className="flex flex-col items-center">
        <img
          src="https://live.staticflickr.com/3341/3484878448_bedd347e8d_z.jpg" // Replace with actual image path
          alt="Annanya Agarwal"
          className="w-20 h-20 rounded-full object-cover mb-4"
        />
        <h3 className="text-xl font-semibold">Sahil Tambe</h3>
        <p className="text-sm">President, Vedanta Sports</p>
        <p className="mt-4 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae odit delectus eius corrupti quam, necessitatibus praesentium fugiat illo vel laborum at dolorum exercitationem et eaque natus facilis. Aut, molestias eos.
        </p>
        <button className="absolute bottom-4 bg-white text-green-500 w-8 h-8 rounded-full flex items-center justify-center">
          +
        </button>
      </div>
    </div>

    {/* Third Leader Card */}
    <div className="min-w-[300px] bg-white shadow-lg rounded-xl p-6 relative">
      <div className="flex flex-col items-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLp4slTfHs-dVyK7qNWw9_BVnuPUV0n1sXbw&s" // Replace with actual image path
          alt="Navin Jaju"
          className="w-20 h-20 rounded-full object-cover mb-4"
        />
        <h3 className="text-xl font-semibold">Yadnyesh Patil</h3>
        <p className="text-sm text-gray-500 text-center">CEO - Sesa Goa</p>
        <p className="mt-4 text-gray-600 text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti quaerat blanditiis qui corrupti enim, delectus sit repudiandae debitis autem nemo hic nam placeat dolorum. Eaque reprehenderit eum aperiam nemo doloremque?
        </p>
        <button className="absolute bottom-4 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center">
          +
        </button>
      </div>
    </div>
  </div>
  </div>
</div>


<div className="bg-white py-10 flex flex-col items-center">
      {/* Gallery Heading */}
      <h1 className="text-4xl font-bold text-blue-700 mb-8">Gallery</h1>

      {/* Gallery Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 max-w-7xl w-full px-4">
        
        {/* Training Section */}
        <Link to="/gallery/training" className="relative group">
          <img
            src="https://sesafootballacademy.in/wp-content/themes/sfa-home/images/training.jpg" // Replace with actual image
            alt="Training"
            className="w-full h-60 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end rounded-lg">
            <span className="text-white text-xl font-bold p-4">Training</span>
          </div>
        </Link>

        {/* Practice Section */}
        <Link to="/gallery/practice" className="relative group">
          <img
            src="https://sesafootballacademy.in/wp-content/themes/sfa-home/images/practics.jpg" // Replace with actual image
            alt="Practice"
            className="w-full h-60 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end rounded-lg">
            <span className="text-white text-xl font-bold p-4">Practice</span>
          </div>
        </Link>

        {/* Teams Section */}
        <Link to="/gallery/teams" className="relative group">
          <img
            src="https://sesafootballacademy.in/wp-content/themes/sfa-home/images/teams.jpg" // Replace with actual image
            alt="Teams"
            className="w-full h-60 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end rounded-lg">
            <span className="text-white text-xl font-bold p-4">Teams</span>
          </div>
        </Link>

        {/* League Section */}
        <Link to="/gallery/league" className="relative group">
          <img
            src="https://sesafootballacademy.in/wp-content/themes/sfa-home/images/lauge.jpg" // Replace with actual image
            alt="League"
            className="w-full h-60 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end rounded-lg">
            <span className="text-white text-xl font-bold p-4">League</span>
          </div>
        </Link>
      </div>

      {/* View All Link */}
      <div className="mt-6">
        <Link to="/gallery" className="text-blue-700 font-bold text-lg">
          View All
        </Link>
      </div>
    </div>


    </div>
  )
}

export default Home;