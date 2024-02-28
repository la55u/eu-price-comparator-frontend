export function formatPrice(price: string, currency: string) {
  return new Intl.NumberFormat(["at", "hu"], {
    currency: currency,
    style: "currency",
    currencyDisplay: "symbol",
  }).format(Number(price));
}

export const sampleResults = [
  {
    country_code: "HU",
    items: [
      {
        item: "Sony PS5 LEMEZES SLIM D-CHASSIS játékkonzol (PS5lemezesSLIMDCHASSIS)",
        prices: [
          {
            price: "189890",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1232921941&ProductType=p&dat=8ozqKIxDK%2FXHl%2FEhUY6CIelYquHPdP%2BWbrIlj7GTq7ukyK4aMFAQJrkP%2BH02u30h5evMjOxCdIzDDkx9OC9tZOb0O3VmN%2BKipcang2COt2e%2BsGTOZGGGzCjS%2FWhQ0ug9xDL8cDNEzyqrCgvOj%2F8K6D1Zsr5LuqSjH4vKKyXH%2FRHrOaQNr1VYQPBuLRdzl9oNBpgYQEipj0KuUkcgh0nOyFgzbNAWaTU4t2Nsv4ha3gGjiEnKWLDCpbpXjlSZ87%2Fbl8JWBg4ZppA%2F%2F41%2FGrGZq9UMFkDPU0pCuVpgFnOs2UGxPqsmMH%2FCMp%2B0dJChsjlMQlUVn%2B7IbeJZsLCSZXtbnYnrKnezWLYI6CwCg5MMjCmv6JxeKo8BuJYE71U1qp%2BW%2FjhfV8PAWqOE4hUm1O4pSTVVB5rrGBwL0zn0%2BLyv0k4%3D&pp=0bb3a7bfdd2ec2beff804f016fe2b7f4&sc=38&ptp=2&ct=highlighted&cp=OfferOverlay&op=1&pt=productCart",
          },
          {
            price: "189999",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1230606916&ProductType=p&dat=h97YvLtz0wsqYw55DqW6NQloE6zVQdLGcKsU%2B24EPVFLZYCVbHGGvL4rXNo4SpGiygROWlRy6FCUU6MuvSYY4zbYWX4rTqmoLOc4te7Q8TW5qgrCJ8SPglk8cOxe8fbptOOOSNAcC0c%2B7DWfvl8Q%2BYgTDoRwKHlMAn%2FOJr4DMJcu%2FivxZnntXJkyi%2F33md%2Fgor77UaW%2FZ4mI%2Fxc%2Fw6dJNjMg7ox8LicyTMZtpB256Yhm%2BEp47PINMdozTHJ737BNg4TCUFIvBCwrfdj0gnLo6Yt5AIuqO3w%2Be6OGcUITQL1O3ohqiegRXJ3blxVHmgsHFqLgreiYtaYNuktoO9eXILXUCQdRdCx5fsTE9FzfSFK9LMs%2BlpAPqSb6TjR0LIEr9I%2BzdmaIIF4uwGkhW58MzPUAhJfnrzvIaOlo0weFzuY%3D&pp=28b02567aa2c9b151457af340ef6d974&sc=38&ptp=2&ct=highlighted&cp=OfferOverlay&op=2&pt=productCart",
          },
          {
            price: "206000",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1252630762&ProductType=p&dat=SV1DJq0ar0N05uHcMYK2KgSA3szee0uIoD5ro05WDX54Fe91P8xCFl%2BHJLeq2AwNYQDT0kDWKn6fIJCDL%2BoCtadXQb%2BVfzx3OHCezwfv%2BgMZ9UcCNoOztQ5VUIsar79Sd2ybZP9Rh4i7KzuCLl5QZxHTu5EpjmFf77UG6SNCb7LTFggK%2BFv7evPsmDXtMo%2FwgdEHMxYC5Eg6aDXX2w%2BuyV31H25DMiMAb4hIrgYbqiFkg%2FlaYeCuAcMg4ydAESRt284MCzJ%2FC%2FcRhyAnvzVfTDlu%2F78%2FCfzId2XDaMuCQGdQh12I2mQ6h%2FKrKo85i9NVfjg2r5h0TPG%2BpxZ6QzGbgnR1acbFGkTapGDyvYXOwRsEB9NY2rllsTqrnSk6C69mBxrFdguPffZ9287NwTf1TJLzvocP0HHKGAh9OqxolmQ%3D&pp=9b08f79039c2cfead92183c0936cd484&sc=38&ptp=2&ct=highlighted&cp=OfferOverlay&op=3&pt=productCart",
          },
          {
            price: "224899",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1237477294&ProductType=p&dat=BOLo2x%2Ftk1pDYPsb0%2Bh%2BXyE%2FB%2FgGc88LHfrzfq5D7YuVdGNaNYyTP3Ggf8EZKKjPuvoA5tOFG5xwSmFqoOwmAO4XA7J%2FQFwg%2BCKeCmbJNDGC2WlfxZmrINkqqVIQxXrlpq7EdSPhxgWNVWn%2BXj5DB4Jq93iswUN7ZedsS0griuzpCX2yTh39Yle3NMo%2Bi6o%2FuanA0%2F1FX2rAbyN1eVL6tZ4X95DjdRX0lHcMAqiyqEL%2FRNBG9pU6I3aLjjzGN8Ib5hW43ZRtBwBc0aF%2B3VUvvcA01ngAPRNFY01oXppPd0OsM8Ck4iH9f%2FRBu3m9rHoxboeo%2FDrjRZ9%2Ba7pbzIUyd%2FQMVf0hYBm5nr9CS407%2B0%2F4%2BixvygiKRby32lnQHN0rGjzXOb0xmDZNFmYtSXEOSLZ%2BpaME3%2B88bBep4krsaAhEHNaU9lmN%2FmXAp2BWh6D9&pp=2472a746e2abb079ca1b86ada40d33cb&sc=38&ptp=1&ct=normal&cp=OfferOverlay&op=1&pt=productCart",
          },
          {
            price: "184990",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1228407307&ProductType=p&dat=Ed9iE5lQ8e8UZJZxm7%2F1H3da8WzBdSH1hLRyb5%2BR0xLYx%2FdlF0tSiv4PYz7fi3lidjSUQO93CeHvCge%2F56Z3P1HYMjHRJxQBbkheQnpxxEaVpe%2FiPVm8b6X7ytB%2F5dGyA80MTMsaFlBKomePCekVPndX%2BJu9BjelY5VYxX0EZ0DIgxU1PWxNCtAP32h8nKgAZ%2Bgr5rlx1ogMqz%2FNTmZbuBhVxTmdq6xpNg43Y1noDvfVpZkcNt%2FUGRGYFusGRZIlf%2B%2BcTtVlzfer5JQ20bXC7HBe8nbuuDblxH%2FZuvkGdiba6a00Cxg9%2FkdWqdqZLe%2BES68vDPnO7Ly17zo%2BIImTtN9xSo03k5vV%2ByKMrO%2Bp9%2BZZBH5WGmW1Wqupp1kGNbqE2Jd7UZgHU94IGVjxqXPW87RsPZdofOdnB7ckLN3QO%2Fk%3D&pp=a913c75b94fe985f6e412454979d1cae&sc=38&ptp=1&ct=normal&cp=OfferOverlay&op=4&pt=productCart",
          },
          {
            price: "189490",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1231240927&ProductType=p&dat=8H%2FXhKOGOtkaFDLbOmArcNJHh3qVxjbC4jCSp44kkHpKyfi60Lwt%2Fkaz%2FxqKonfX2x0v2jFyLPGbs9lOr%2Fxt%2B9yHw2sKNVRkDbEjORJ5OVlxgmt0LgA9UIkNSD1iDVBLXBU4ppb1NyfT321ehPwq0o9GHfyf6l11VSaPHmfSKvX1MdMnFNF55%2FPmgTgUpEigzwBhjSO9Y7GGQGFo0a2Lbr1UjI9ZaW7C8xdZn%2FmXFjIzts1iXIrk8GyiZiBgQB0tO8kXQ3Ni2pLD0zbZOSP4lZt8O546G6o6Pq4m4PKUfn78lX5jtNBxHMB9yodILIm%2F1i1xlKMb0krf6cgCohKanREyIpp3S%2B%2F7eX6OC5h0%2BKcdFBkcGM7FVjERPvaGqJJB52AfgtNhgtBzB18mVTYJsXRzUr9Fb2gUB9gkHhsd2%2Fg%3D&pp=9a3abaf0d98d3f7b5ae8e24dd4ff0dfd&sc=38&ptp=1&ct=normal&cp=OfferOverlay&op=5&pt=productCart",
          },
          {
            price: "189890",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1250617279&ProductType=p&dat=gLKu2Ku6X1G5vMtNzXnfkHs3iTPF4xmnXDxDjtOVky9rnUYDMxzQBS8rs2q9j4gk3%2F%2Bz0f870U3uoR3DFngLrYzNOM0eTpw7OhkyGfMv5fgScnmpf8acFAQ%2BnX2w5ID%2B1hJnIaHR4%2BZrrpeUCf%2BWz1HS7s%2FJZEfFWSWlvVdwJufdiPsGibcrm%2FRZoPU2pqGDn5yJ23NLLgGUPr8exes6SklBM5QZx8e5HqCQLLJmbWKhTN9kgvOWsc6d7jg0f5%2FHFfDojAjxqVtfSavS%2BeBOnoDEHdsFVdApoXBBXDoQ85GLC1AD2E2S50tsfqXgiSfMl0HslHZixb02ck8yj0FW7lV%2B4DVE%2BhNGbicKyNdB2VaYI5ZALvANi33bQLHdak9sgzMNgykvHhjzDf5yW05NeULuASBQ7Uv1fG6NQnpNUNQ%3D&pp=3efe514a3e4549fb71850eabf4131dae&sc=38&ptp=1&ct=normal&cp=OfferOverlay&op=6&pt=productCart",
          },
          {
            price: "189890",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1228407316&ProductType=p&dat=8bspyUAFQs4s%2F5b%2Bl2sz%2F9dLOMoSGt5ksmhUqkIy%2FjDDr9Q%2FlfkZgbKViPikGui828cJEQdfvZohKUgZR3ve0GNlBbDOQ6YSGfNIPMXStQ1gT3fGPG2LljNfRr3pMWHzpdS1kRjomV0q4mnWPn8vWdzL2rgJPA2dFiioM%2FaJyQpap7QzgaitXJFAHGxE9MgIr71dVx9qGEcpublGhCobDr329t%2BMZ5oDMbPrVUv%2FiebB8qXx7q61sum4ghmtlWB1TE2R851SXz7N8qCCVWalrheu65FumvAgWiAYVBhO02AfbgjfHJKPuHdElcMBpim8Ky7ZxE4K7x2J8aJ2R36RWECtzMjSEUkcBvQPff7hxDxJXwdcr0YEdwtJARDhUjSu6G9QP%2Fahw%2F8ahjB61zAVQdGVzn%2FEKNaua%2FGRLnwI4ns%3D&pp=7117d65c09f093216767ca806f03f909&sc=38&ptp=1&ct=normal&cp=OfferOverlay&op=7&pt=productCart",
          },
          {
            price: "189990",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1228407310&ProductType=p&dat=kmnPYImupjHelZ6Bk8ym3RLR0HQ3p46jV%2F3GWxVdJQmycSYYLkXlg2jhJgwesVGl4H5szAIvnwwVsE9JrOsUrLvvdc8Y2RlZuUm2QqEGdNI4ermTYjdF3%2BqQbzkb9SS6i0InuYBpTjrhaNg%2FjYw5ihEaLiHhMo8O7IMJ9YY0bpw5WzAPdXyyeLDdHh9tEP2W%2F49OC6S%2F5382iJbxm9O9S6A2dBYZOKMFDjrfTth3wJLzxpcMvSueFyUvY5l%2FjHYgoH5aY79mMlu%2Bqc9oM7%2BdR4kGSHrxJ4kHzMmQbmth1vJUtAm6Vg%2FAAVFbGOgAgqF5GJYR5y9vNC%2BbfjbKv3r8KMShfV45t9W3KptYPI4MCB3aIlDQFRfPK9B46u71BMt0hDpZMWvDuC%2FcjvAyLak2en5FNp3hOtEfQJNF0qmFO5A%3D&pp=e3715cc0c01d62b64e0123a373d52e69&sc=38&ptp=1&ct=normal&cp=OfferOverlay&op=8&pt=productCart",
          },
          {
            price: "189990",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1253914138&ProductType=p&dat=ydiV2u3zl4yFVROT3l5CBSlq1fjlLeUdSkLS%2BvcBOHBngbwhZbPsJI27pDpkYsnYVN2lhxOlD5UGKPPwghj6iEv%2BYnsRJwquAxeKOKUS1jP9OSEuF184Cd3xQmz3jP%2FKvd16NcLcYeKqWVjBVIwNqs3lVFUWG1ZVKrKU6lX613bfJ98RFFfpALSns5Ff2J6G14MQ7Up%2FgTEtChosBNOgHfo1ER2oaBPAWNUEHelQIGhtLzgYHmEIyTNF8lek2g9eTep8p2T1fpx1aC7qA9p5J5aZlhX9d%2Fia0TCiNkfocmHLCJKpRi66Hko5bpyFGmuwdY8zbLghsc%2Bf%2BK2WXEJLrDE9aJY1JRXvePzy723uhHQiBR9yMzcyF0vvgRapEQaUxzWIrrEe0LmkXhNq4MN7uswHPK1gVoD7XeFN4ysDnDM%3D&pp=4be74d4a4a38cb1c281b848a1a6ca8b7&sc=38&ptp=1&ct=normal&cp=OfferOverlay&op=9&pt=productCart",
          },
          {
            price: "189990",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1230207442&ProductType=p&dat=0VkoC0Fk5rthMgCFgcx2fpJ0CSivnVZpVP2QiODP1BXawjkpBMFy811Z0vReaWg2xLPVFe1oX1aGmXtSt8%2BqEmKigtHQo2ONWNhp4xTZRwlY1OZiPkSwHdW0TjxHIxlEPSuwSShUWVQlnVw0RbYjWy5UyBod%2Fyv84wtjyYC0K6KqfULGB%2Fr1OObT0Cmy7t%2BJ74Z3x4ayaHdrHn6wRtGa28h23yzQwymFpI2YCZAJgizYMImCE6YtATNl6i36LSzlJYYkiZ%2BI4OKOe2JIBKqKOU4WUVUuvhn%2BfI3hVF4k7M%2BpqIB0KkMjzKxro1nXxntExIg%2F39UK1lLIeRC62tpQHOUO0T0zmQ5VJhDeOrnHptYpod9hJdcForJwDn4enq%2BOkJhBrOlRjceKZ7CGwml136pVmNwcSYHLH0hqS6wVYr4%3D&pp=658b932f7e236b8b5948facc2889ccc9&sc=38&ptp=1&ct=normal&cp=OfferOverlay&op=10&pt=productCart",
          },
          {
            price: "189999",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1228495882&ProductType=p&dat=eqxD4crMaXpsFLYfTfUq1ANHfJP3ghy9A8wk4G6cBwKQu7W2YBNDWl%2Flf1L%2Byz6TYXdDOey%2FxXCCpA5w5j56%2FqcDoGSHuiRsfoJoMJOIAfEB6%2B4H%2Fy5vTgWg5YmnySQR6Cm0fT8cZ3eh0cC32rjKIW8z8iswe%2F%2FDRVOVqeC9VVCLJc8%2FZJMPzaJCxWLb3CwGO7VOF%2BlrtP9MIjTZbVJv8UfhcWrEXo48Nc84WAipOvccXffgOr0ZF%2FONvrEfOm6AL%2BSoHXkVxHDr2bD7hrAIgFFr40AJt0K%2FK2MK1652ChzxmzKtLJzmb7tfEjwcbmlCtwH9%2FyZr0QGBjHa3P6wu4z%2FI4xTIs0xCsCBXyaHyJX7Ezc4UFCJQGoYBaem9akn9IQ6Hcpv7HW25uFj78Z8C2yiz%2BTmjKa2PmQNaEtcKDVY%3D&pp=566c380755e241504c97add29be96ee9&sc=38&ptp=1&ct=normal&cp=OfferOverlay&op=11&pt=productCart",
          },
          {
            price: "189999",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1252919254&ProductType=p&dat=6C%2BOX6OMIGWd9SiReeATUDJGEE0wCGrvCl4Mh9YLqNp%2BeqnSVcH%2FFRVc5EkOqsgKOJ30eNmlokxqoX%2FfdZK0vsJcDmQUmqf8DYsiGLWp2i9KoriJzYResWfVHzpTLMClj9BLLdWSoONd6hEpbk3MoJri9mYmEn2E5s3t1YeQlFePEEHm%2BRqm%2FJkl%2FvtqtDXRmNsaq7XT0jzBuHGjhHQIqKyaViKWxiKyzrWFsgbEtisMhbAf5UW9GSwp1V8JMhzJYtfTvvwuVQXrRAWzHsJlwTvzjHkMBNRObzg8w%2F6XBMLlE3TNJluch3Tvu%2FN4ArHZrQSebafBe3P7trvg83I2K%2BpQP2Nb8%2FGhsZtILwqhxD6Px6nXaYWfWHlpQGEo%2BeqiGtd2dEXbjWl3TJoUpzpZAHxZZ%2FZz%2FPASjW%2FluTliutg%3D&pp=2269d1cc31b7ad3caf2aaf27ec7bcca9&sc=38&ptp=1&ct=normal&cp=OfferOverlay&op=12&pt=productCart",
          },
          {
            price: "189999",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1228747339&ProductType=p&dat=tQ%2FNcSvjdOg22ofEVajtrXT%2B5mygLVGAQmB2UMdMdMWHwMmHD88D2rN5Lxvj7fRBAq1V8NPNA%2F5bcYYbvKzH%2BNFLS%2FO6eRw4QrIYfHJ2lWKusi7W8twLW2ElCRxGzBMeQYnb7nFFpyOnc1CfShbAhrRqRaKAUjLmy0Szknu%2BxHGzxBhVSBjWAn9r15sBr2uWr9Pw7FV9Inlsd3Yfv9r4auw%2F2qR0Iwpd6rUvwkVeRjAGUEC%2BRlxoYHOdjBO6NeQeQaklTwxRZrPlDncZniatF1tGNiYWcuUCftirMyBZ3kMC%2FwGDMVdvtuDP6NHEKCf8XKDx9rgh%2B%2B8AlTMpx0PN87dfQC6xu9RKBwq%2F0n9WltWcXqBMuvct9BqAJ6GPu8Vrr3P8Nnv9%2BhCOXm7nhsrXQ0J22KP3IjhCh9BQcdpd6wo%3D&pp=8a34c3fdb4e05aeaabf2d5498cb3e70c&sc=38&ptp=1&ct=normal&cp=OfferOverlay&op=13&pt=productCart",
          },
          {
            price: "201481",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1228407292&ProductType=p&dat=USMzODNTqmPTp2%2Fz2Xu2ZPMWNkEB2gFS4UbMdLDvhcVbTZ6O%2BllHkc0eSPCn8zmdzy4t%2BBJG0oPnWG6VaclbSI9mrX%2BBYc7kBIol%2ByFOpwPglkv8iXvipZ6c4lve6kasESq5GdrRdyBilCLyNo%2FgO1ladgfFGxitQyImxedeDRvchx4uhNd1OH24JfY05sdGUNw%2FHuryQRRGDeLtA1z96BHc1luBD2FE%2F59BdGTBIYcIGuvWs148%2BuO%2B5A74VesTheXitCivE%2ByKSlqEW4vqlxwG87jXYC6xAAsOMb5cUvTskg1ONJuPmryp8UfjKu%2BOrcWwEciyWyCPkDYe3IpFb8Gd%2FLIb3qu97r9O%2Bquu23aMTeN5dgyDn76ww8QWMySV3ndPk4CRwy13W1K7lBArGSLXKK%2FIQN0luOWWBcMiWv6zfBkjxjVppIWDz9ZmjjdP&pp=6d16f5d432dff9e59ab6ae35463e2fc8&sc=38&ptp=1&ct=normal&cp=OfferOverlay&op=14&pt=productCart",
          },
          {
            price: "201491",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1250580310&ProductType=p&dat=0ue9%2BepBV6kCuMgKQKUtNRse3U7kk0hOYX1YXLdDmU3ovIyeCvIAt8CdTCkeuTt%2BHqK9%2B7jqgH2fXCiGq7Wcbt7sxM3o%2BI2AxpTe9RYMh%2Bjnaf8Q4cQxJPxf27yYaczPThqh7G8frzuYpnfCvZ0ibj2q7O%2BOuQFh42VTC2Qc6kVPSJ81k4N5Pv0vYbwO9vm%2Bp3dW6gcFDAdmcNUrP0BEC0%2BwqKRyqA0MofTM1BMnQM3QjRdWga0v5LKdhQ4EkRlBQaYu9awwhBSpndSZrFicaHrCakWuj%2BJr9tk%2FBLETb7BcFVlUFs%2FSH7MKnQ7AnDw0y8i3WyOczvuat64SEAQ%2FJKlvPzkGVYho8j0iKrjBh0P%2B3u18oKKfZ%2BpShWeS9N4MPWd56SFBpmgaFR3o6knPBX1zTDw%2FTLHTZ17Eb9ryBRw%3D&pp=d2b91c13d584855aff9cbe9a80da9325&sc=38&ptp=1&ct=normal&cp=OfferOverlay&op=15&pt=productCart",
          },
          {
            price: "209000",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1228755142&ProductType=p&dat=9AHTL2iw1NFk9ey82PSWS7cXkpiOWKoBn3SwkmDylSmDpoeKe4u%2FSQN%2BQzrJ2dgIypF%2BvFPk2dpvrw4ZTDhou9bpJ9aqtMjDpejFvLILoMsaFg3OLg4ebca%2F66%2FSRJxE6s9w8Oubg4YtEcGvmWHmxFLWR08TrOKn45TtB%2B2DrIkl%2Bid8Uo5z6k4M4EHeuOrQFf%2BLQ1qVl35XASnYolm3%2B0elKV%2BcChXEfoL2RESJxnXKABtZiufZ7KdBDwj2D4SJokF4QSSv6qjdUjJMihmgv%2Fd%2FctFRVWCji0iniPS%2FNoVwWeFsQU%2FR6cGjAgfBvQdCnxFqJpHrMBuYCIAS32YV%2FsCk8K2FmGbfbSWCJ3VRTfKrRNm4OojuxHgeQI4JsbdRof%2FI4EDjOTPvM568ZBrGpzMpTOQJCkvjFVY5jI7BhLqBOpT0sqg%2BGORpz9RhsAng&pp=e4c2f61d3c27458e756c687d4a5b0c46&sc=38&ptp=1&ct=normal&cp=OfferOverlay&op=16&pt=productCart",
          },
          {
            price: "209000",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1250579407&ProductType=p&dat=kKSJkWHVGBAJKBtBYf0haRuKqAPxgoEycrMahigrf0V96z9SIhbTeP%2ByXUEN81ZEbX%2FOsyimb4JtopePmkkiAaNKJAId9BUvYplg08D4fb8bBwlFZ%2BoEtGIc2MAWwm%2Bl5tN1K7Ja4p6ccvR1bVXWw%2BYEE5vQ4AKoe6DNjkgjCH3slucmjg5diKpkQiiKNXlApTkhwn%2Bvxpas72yqggGRoT0b%2FUkHm8V8YeJJnum7OLFaXk12oyJ%2BMTjAzZxvt%2FAsqDgADIseZRcp%2BMSIX2BUcAC2kjZszH1DyJCevzvqccjnQDtwjnJPYyhXQ9EwZR6GLFzG5jLtkDrtJj9msSDWr%2By2Et6FkvFJNsrcERjdS7%2Ftygi1Mcg91cCDfGmgV30djPMTOmMfazcnhSGv8FvfyAeF7RiggXhAbJZJtlgMaGk%3D&pp=ee2575c0b16202888b58c9a1e7ef0144&sc=38&ptp=1&ct=normal&cp=OfferOverlay&op=17&pt=productCart",
          },
          {
            price: "212990",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1250856310&ProductType=p&dat=sihSXwEmK9pcxL9KTazU2VSX40hrQPXLAy8c0%2F8FXZCwhTEqAAEnalYaqajrBnpp2PCAC8qO8EgtckqJA1olunxMH9Wo1lNY2BJmzI8ycZOezFaztc7kjSbaX43772B4u54kQlknslbqWrh9UaVz0Fb0qqcAyiA6PXp3gQqe%2F84DTxnkDpu4Qly0N6BFI06JCEiyklG0miLjsR64xZLlSpSxLX6JbWHHt6WYqAhO9mh7Ef4frY%2BTXJYJYvcBPiwoNSSXuuvhoeVnamgbTRmDpYgWBHh6WRv6lXP34pbcNVSl2Lz6STTkFniwdqJix8BY%2Boh4rXPlRcb9jVM%2BvZnNWhYZkZVQhQljUxMvBEHLl8HLUqTqwwoDCInm1XfePFedu0Vy2x1LrgbIC%2FQDQibqrAuwf9ZEM%2BXyYrT8x3Wr2r4%3D&pp=8397e47c380aa5f4266f0b96fe75d96e&sc=38&ptp=1&ct=normal&cp=OfferOverlay&op=18&pt=productCart",
          },
          {
            price: "216900",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1249389994&ProductType=p&dat=4KH39hb4iOp8K%2Fni%2BYIY10Sz0jj%2BMNpcVfFk5ZytI3NpwURwl3XaNIiapSyVWff1WXcNeBuNMKtZDAO5dEeMEunZTzXGmwIa%2F%2F9iRQEKndeE%2FhHYIktOpqZcSbu0fc4pK%2F1zydYY%2FDACrfTIO%2BdYwK%2BUgXPgZB7UBAn3qsZWpgHCuPdLrKMPxrI0C5pnDhYc5LOmHMyswtX8BfzZRwTxM5iG1OkRbRoGJTeJXGkcdlTm08QaB%2FoiFSjXkITq1fH1GdG8XV1G15TuFxei4KfcWj5o%2FL73%2BSg64xfg7qcU%2FgrlFW5B%2FX03EZoHrXjKkoTuOR%2FTjIQTbF3Uu73wyBaMjhKkXTMveBcQQK7P9vwZ%2B7wIUnvzPXNTVUirll0OfI%2Fljze2SmlGkCR9ISAaOPIZKUbtRzt1buTG%2FaORbWBMRNE%3D&pp=2c9ad89887640288bb021dbce830bc00&sc=38&ptp=1&ct=normal&cp=OfferOverlay&op=19&pt=productCart",
          },
          {
            price: "218990",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1244520460&ProductType=p&dat=srSfbnO018YGj8juh7m6aftw1QPCxvcOrNGmBuSjQhZOZs6cbvTWHenB9i5cmu4Op9x2rFh%2FoYu4eZJpKMZJy1uGKUjO0eWelKjgqEdcH0CcXO2Ulxe3RVQcMK1kWwMv9n6Rqihl9VXkSqdMQWauOyMEEM1GwEEz4HzGXv1cEG1Z9hXx%2FLbzloKnQ%2FiIz6EFSBpNMf%2BPfTSM1AzBp9DY01Q5QcdB7CQZdUuvIc7pmaQtbZB8jwLSnNH8tMV27dWSuFnNctFEX05j9Bi%2BFfEgKQT%2B6qYVwlVLOVh%2FvM2sXMDNLZTJcD5FZpkB6peX3ck7n%2FcFetNYp0SUt7f4uvoLSQYW%2FGxy%2FdFET6IxZxW9JKSikGQqmyKRoft%2FYls1IFg0fhmZ6shz1ky5DzDH0MfXouyz0z5J7kL0SmGXO2bAHXBZiaOviN5wZIPBZkSZDAwu&pp=ef47153e1ebbe8ae81b956357343e0a3&sc=38&ptp=1&ct=normal&cp=OfferOverlay&op=20&pt=productCart",
          },
          {
            price: "219969",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1236523021&ProductType=p&dat=UVHQi%2FIzEke9eMgG%2FtejoJfTMiKFiOv6%2FpPLCi1C0oaezwPRpCerVOGq2B3r0ziZ1tXtCDJlcXcCiQ75VpBOD%2F3mbybH2C6aIQ%2Bc3dGOUxeyPdohTNnrdMkGvvDwAvBJrYa%2FELm37DXZ2fnPaVkHOnZs97PPw98nQbssf90au76cVMzSVd86%2FYM7FCoKAQgaTOGsRxBECDpPhLKC2JzWL%2Fhj0DHt1%2FlBRLue5dtVBBiWByWRSQXX%2FWoPGCTav%2BDpHBwvF7A%2BNujBNfFjTwDVEgO8sQlEsLs4MZD3i7f0Qc4fHTzxUKaOpofKlrKmY1OzhvKW%2BENBvx6A9wdDHcpQVOJhlnY%2BYBB2vvdGjFG85IGclxIOD38b7MPzzl%2BByOlBLlv%2BKGJGC8dpKX3%2Bku1rcdvFyaH45T8ToFL0sFtvTy3KmeKQO0WzUS%2FNaWIlkM9L&pp=f1f1e0d1fab3faf883a2c208d021fa03&sc=38&ptp=1&ct=normal&cp=OfferOverlay&op=21&pt=productCart",
          },
          {
            price: "221990",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1228407295&ProductType=p&dat=CgJuAfpfKhCg%2FxEeScO5PWPutgONrCXYp4dwgCmxkOzdAbZHIvKSJ64mRwlg8ZEDNGmWqxhrIeDmoXzk%2BcK%2FbVLKNPdQzYJeLSbT2pX2RFWnnZvI6vAlJn%2F7qexDsQRY2%2BcBWxCl6qCoB5D1A7LS2SmnCSbnoh0EeOlRTcp7yKEtEaHTsPjBdgJyCGod%2FeJ0lqq1QONAYf6%2FVAqE6tEI1s5iy6ssXnsoKi9FspUmtGru9Je9fZpmEB7KQVQxtUGAqLrwdrQpWBA%2BdmxqFb1PvsV%2Fh%2FhJA5A9a2U8wRE5k7EbX3oQmSkP6kimZy8uZjm%2FDeYvrPGm8kMuSitjXO1bYZ3%2BAOId0r3%2B1Z7wXXKOiEWakB9RQfVwJFJBpmLl5YpnSTKURhOEmJqPrkRhZPczZsIEgw3F5kLYat6d8zBuV0DvnyEh6ZHdLpomvv%2FFKYm4&pp=53f63921983ee6189824a55f5109c712&sc=38&ptp=1&ct=normal&cp=OfferOverlay&op=22&pt=productCart",
          },
          {
            price: "222990",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1233309931&ProductType=p&dat=eRZ96LUrX0lGGjCrzPnHySaa3CWU8l68D9iD42i4use3C43xPoH9k3Glw3JFei1sRKUhoj9r16FW%2FCucfbvtuafDZcWOD2v4G8ILMt%2BikKSpIukkSfUw8%2B8jCB77q%2FIIyw4%2FpB%2BZ5KwK919Jr5CFFjGznDm%2FSX61ThxwzzowmhJkLtbSl%2FUk22XMC7iNLxQSJj2fqaNb3V0Gxxg13NuP7tLdbbT%2FoUpHiAnCxmngN5zZm4rIdHNzPTr3VlarLoxEuP%2B7MJwtTdUs4fvU%2F0Y7LsldB2QFysTkilGsIx86XrNNS6jft8oTJ1gnE1%2F%2F00o1wIxwyR75%2BXz8g0JSIhiZ5uKPL0mTWxPkHzhxaHL%2FDKK7tl6s6t96opKhurc1pfP%2FnQsC68ki0EbauL9dfaWITfGqI07d%2B0II8MyTbiq8yGY%3D&pp=5d531df07d249ff869090b4efd7e0527&sc=38&ptp=1&ct=normal&cp=OfferOverlay&op=23&pt=productCart",
          },
          {
            price: "223980",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1236020692&ProductType=p&dat=iCBxGx6Ofez5wvM3Ymaop8FsxWx1raeO05It9PuRaEMYumkeF0lhfLQb3EtcTnP3g5506dmU%2F5H3rH8Za0EVtQBikQRJwdwT6QMiaehLa6ekMotit90j19Sn5Q7ovjPPYnhA6jiwXWPEAx902bAMBux%2FDME9w3k77W%2FGcCQkCoaWei04Swkw9JNrC%2BLCvAVVf6eXFhMwmsgTW66HcbwURuSIlfTbAULcyZwwZl38NdjarSW68BwNikPrndgLoPGCBM70FhjhRWiUDDoVEn2isMQws3BtafgP25QlGfLl7FU0G14AVygbC4eOlSO5A2yccH9bPy4SW%2BgK5VCOuHGILVkI7icEW8kgOTuremyxEtp6E8NzeoQl1Rr8MoXN%2BzfS%2BOi0IKL8NwT6ozpulNSogfA%2BUXccA4HjUNTEIdp2C6TxTTAGfpu0T6H%2FTepeRyNB&pp=d1ee882edf04c10b30bffcd58584af48&sc=38&ptp=1&ct=normal&cp=OfferOverlay&op=24&pt=productCart",
          },
          {
            price: "223999",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1233715003&ProductType=p&dat=5UcMQAM4kiRBAjkL%2FgsIacTwZ75ttO%2FBwnvvB%2FudoaT4rqpAqrQ5duPM1sudODVzra9nzROwF7NM2Vut641%2FUYbhTZ%2FEL%2F90aJ7UJtYr3jtKlzMEsKbkI4aw0NEguohax%2FMtMjglP71du7qsyjpQZgsBjcyjkgEKCpuwSPta1ecB2oo31deinmpT%2B0BYnMvFOqLGS%2FLFPczT0MKYNW4QZTP65tQgaX9zA6kq7RrX%2BzTnRwDR0VERKrjybFwMjAkcW9pV%2FbtSOvCzW7wuF81nF43wM5isBqL%2FDyQzE9iHx9VqSikROdNDgAQoqyIbMzvcCOvEAIrtQ1URNSq3pjyM%2BzXlw2QKh2j7WsmXR9sCWR%2BewgEenaHGuDqwast8T4ydQpHKup%2BPnikwBRPOmWXrN6DnzRIWMSScudBDgLRcrSp5bzElr1DviWNTX%2BYehAG6&pp=009dacda1f338de4f4cc8f134d2d7555&sc=38&ptp=1&ct=normal&cp=OfferOverlay&op=25&pt=productCart",
          },
          {
            price: "224899",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1237477294&ProductType=p&dat=BOLo2x%2Ftk1pDYPsb0%2Bh%2BXyE%2FB%2FgGc88LHfrzfq5D7YuVdGNaNYyTP3Ggf8EZKKjPuvoA5tOFG5xwSmFqoOwmAO4XA7J%2FQFwg%2BCKeCmbJNDGC2WlfxZmrINkqqVIQxXrlpq7EdSPhxgWNVWn%2BXj5DB4Jq93iswUN7ZedsS0griuzpCX2yTh39Yle3NMo%2Bi6o%2FuanA0%2F1FX2rAbyN1eVL6tZ4X95DjdRX0lHcMAqiyqEL%2FRNBG9pU6I3aLjjzGN8Ib5hW43ZRtBwBc0aF%2B3VUvvcA01ngAPRNFY01oXppPd0OsM8Ck4iH9f%2FRBu3m9rHoxboeo%2FDrjRZ9%2Ba7pbzIUyd%2FQMVf0hYBm5nr9CS407%2B0%2F4%2BixvygiKRby32lnQHN0rGjzXOb0xmDZNFmYtSXEOSLZ%2BpaME3%2B88bBep4krsaAhEHNaU9lmN%2FmXAp2BWh6D9&pp=2472a746e2abb079ca1b86ada40d33cb&sc=38&ptp=1&ct=normal&cp=OfferOverlay&op=26&pt=productCart",
          },
          {
            price: "224900",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1231760458&ProductType=p&dat=Hwnt7cX5RYV2dtOiGDxyjD%2BsJEZIfjPxQlmXTMrs4Lk2A1OLaaFs36EUDtM9Nq%2BqXBm5%2Fpn3crxSrGE5vw94vGGjo5%2F2UNeAWkAOFuFBxYqqd8jvjR6CJ4rwgkTIuEdpN1xUEE0DbCVck2kiKKeRY2xrv%2FzmTSWntTxZ4qrFNz9bu%2Flo%2FJhXMSbYu2554KiAeiLB24GWwqFEt%2FIkuKxhDxmVTt4vScmy6bM%2Fzw9%2FzxdmXqugxZOeVrf2p1VCPsN9DmiNYi%2FrunTZzkleHZmDsyDC1GRQy%2BLlp1U5ukXiNvpvYiJo5h463Z4dclt96p6DFNdvDTghHhKucPjI534oV9IJEfm448YtxojjwtOYV6Mic0aQipWY%2BDdYmCkC7nG%2BEn%2F0DaVp2uRzgBKOyZFLaDqdfAlNOPWC0plOa9OayEgLgB8R2Gl%2BYfJI4mMzhbdE&pp=cd2d541f18f7767929f57e36f68bb700&sc=38&ptp=1&ct=normal&cp=OfferOverlay&op=27&pt=productCart",
          },
          {
            price: "224990",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1249876291&ProductType=p&dat=rQqJVGFhkSi1a%2Fb2uawUcJaALa4b%2BQEEq%2F8PXcYThN2krfffE15aiogmTXClClXPngiTnBhIzasgmqwRuXdw5n7YUnp%2B7qTgJdUXBsyew%2FPkqPMEko3WYK5a0BLI19k5rKvb0cx5YNuAqRmAJ%2Flad4q244tecxsvLH5VMfv0zAiS%2F5bHrmCQ%2BmCYh6M2Mc7DWJUqAMlReWc4KZzWLESLtZ85oZGABoBxCSEO057dhtcnfcnlItdpRNUN1Vge9Y7%2Fu0a8AyymseSOF%2FdQOMvWYYo9UQAHqNsnSeiILlvizBuw%2BYlzopLOiEMHR8Bwemw8Spf7ZMPlRWqZQIY9cRsvz%2FMcxr26Pl0gR9QwOOnksQczI0K5ZhbUUVGCfFjN1V%2Bv004KfgPyq%2BJqwwmQYjqqp%2BeZeVSc6pr8flP4FB%2Fu5iXFS2LfBg5GsQ%2F4GnaBMLas&pp=6deac65198a31b20747ba8f112fb05cb&sc=38&ptp=1&ct=normal&cp=OfferOverlay&op=28&pt=productCart",
          },
          {
            price: "224990",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1228495885&ProductType=p&dat=M7i3f59jariqII3GmUcPFKhHge7XhW7Dqjj7cWM4nRoqTGTnEz%2BfWLbHSk4biiNVlYaB4b401gnpy9ZS9TG08J8AtNQLTtjqBcf6Az7R66Tlpt2ZJd6BGaKUNBSw%2FV2QwpIvYZCISaIIMIQ5eyM6HxUovH3LVsCM7kYi8p34wO82Jq7KkaBteMoW4V06z5D6%2B65skJs%2FBQUIIa8wwdxHokPrfvGF70SnXG1l8jQnBgZ%2Blij0M5uGQFWxPnvoRnww2teRu1VGsbVsf8yrjgraIctrdmLWbkjYK23dBqWWy0EL7%2BiV3vHu7jMlfE6B%2FXnfliUCDP3fi1o4CejKxveA2zpkgEMLbWu%2BM9wgm2LkwDButMneWj5anhR8e78yX7eKsBEymQhr6MIl7d18y8pbvF7BrAUYv%2F4v0Z3eReYf9EU%3D&pp=66bd10da44463d9ad2904c12c1eb7f99&sc=38&ptp=1&ct=normal&cp=OfferOverlay&op=29&pt=productCart",
          },
          {
            price: "226900",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1232441506&ProductType=p&dat=Tj1YrYnfJ4Jq1fUX%2Fl8cnzSIrgfyp541Ctkvg4xFDIPwDNs%2FJM16n6GITayifYUrUCeWNb0FaUWbS37vILmXHYSxdqVBxhTn1Mh%2F3ESjky95karOTLfEmKuiA4mrwiwd1fdaDj6r6hQZ4nO3f6%2F9sPQadRYgB3V7H%2Bu9D8h5p4VFBus0bzXn363BBCgQZrxBlCzhdh29OP8TmK8o6DTJR0wCfnoxVe49Gx2rqjyM18n5cHH%2FAIthCABzpwaWBrjk3n%2Fn7iqfVtlKF9IhJa9XVIdwjF1E85MEy%2FsdRxJiZB3et3euIHD9d%2Ft8axcdvWMWFo2CKqe5LIYcI7w%2F568ahoC7eWuLyrxd3JWnwSY%2FHxGUq%2B%2FB8OUTdOaClu2iLO%2B6s0VyIyYsBPZtNo%2B3jS%2FXMKxAozyLC6ZZ5YlqFNS3Z7qGqmTfnogs9alfpF4GIhJj&pp=f83fe9ef28844d1eb569038918364dc9&sc=38&ptp=1&ct=normal&cp=OfferOverlay&op=30&pt=productCart",
          },
          {
            price: "229249.61",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1242610129&ProductType=p&dat=kQdesHR%2B6TNQJae8kMpS0Bjp%2FJEaIMkUmG51ApCbLVJkqU1Oy1sX7bNvYEjlbKxWw39S%2Fb%2BzuOuP8HeR4phD3yW%2B0jVrv8i44T0Jenk67SLSCIbDNPdAPKCfiOCeFtvgKW433PQqaGLVaaS1S9nxs0Z2Qx1oX%2FIFX9MvqfLdEQN3R84etlVTgZll3p18jtxeL4Xqv5vrU7NjX9N9CCk9o6lMYqF3oIrnM2rWaLD7A6lmuZr9jjs8jYEeancctM86097fBx20BMhZsjLm4dY%2BHcF8ibjURERpzwrehcH77EsIJ4cg5eHBoZK8Aa2ceiTgzxW4W8oEopzZva36g%2B4qDTWTNpfQGgXUvj6IDM5lGgh%2FOlhPTZezvB19Ex0EpOTUXYQXjpPmAiHKo1%2FVc%2B66zlrlLXzwFiPYkaANPlpxZcM%3D&pp=14bbb2fa86f931971e03631faeaa4932&sc=38&ptp=1&ct=normal&cp=OfferOverlay&op=31&pt=productCart",
          },
          {
            price: "231990",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1245448747&ProductType=p&dat=5YXmAQGD3z4GufbyWuK3C76twWuav5kUYGV2G8iyitx818eYTSx0oOAK8o%2FPqAZaTWKrU%2Fp2VkaocArKq8wipIUE90U9LXhRQXRVR9VsrHotFS4fpYT1xUqv4kMdJyW5l8678H3dlyv3j03Y%2FALRP2tVFWYk5U1CbrQuRrRkPd1im%2ByP0Oj4JD3cJTmJFoMwiPhHLhI3sMqz4ZttnkocZnlTo9wl4J9KoIuXX9MdRcVUX4tIHV1bbkjbmOuf%2F2E5fS1ya%2FNOKOoyq%2BAhm%2FrXRlQJypX3Z2Az4MYiU0cbFPZEgJDbtJvmzRQD8lgYRABbRt%2Bu%2Bn3COaXLaoN8UEkWMs9r1uTEYTJMpEoe5uuCamiFJ1oTi%2B1%2FqQNsMKcSeZQ%2BVdNgSuVA5U2N9oxIeeV5nvvreG6rPFkjtsz93fhhcGSPboMfmwCw8Ny0n5is7Z%2FH&pp=2fc556c2809e1c561f4913be2f8715af&sc=38&ptp=1&ct=normal&cp=OfferOverlay&op=32&pt=productCart",
          },
          {
            price: "232000",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1228755139&ProductType=p&dat=Gv2kyNuacKhssCzSGlpwm%2FpOlaiSI6igYCinAqnc1jE25eYVxsnp8mF7z7DUMp%2FUZDROmHrrPcgryXeXxNX5uZNNd6UfVnK2GaOL%2Bcayuya7VY1Ln3vBK2LomVmh7hKxxuUgEKyO7bGwsInYEzbM6Zr0qxvyKFeEJZ%2BFmaNL919k6tS0sKbrE8eh9%2BZ3waKQFYyWJSMhJi2%2BjV%2Bxy8OOhO7rfZrSX3RKfHpJxQu%2FFMVxomBvhMfejYhEBzh8p1wn1dvP0xEGhKWe%2Blt3zY24HN4loY58M8HT%2BFq7HMVIzqsmDniPDKLzaAA5VxgcSKqP2m9iuFnthN5%2BAtWaW8P3l06ae7bIc2ioD95Q%2BpX7GmVCB3cf0iWn7JL9uS0rhVDJiZDUq7%2BD0b2Nq5%2BMFggVixkKU5lY5ZqNkQDsYAJ2QUE%3D&pp=a95b447f18be947c9fb8b12f34a6e54d&sc=38&ptp=1&ct=normal&cp=OfferOverlay&op=33&pt=productCart",
          },
          {
            price: "232664",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1237184551&ProductType=p&dat=s3%2F9a%2BUEFY1cFEr1kzy48VqE5deHsuhhYi6geiNXX0fKu3p0KO9MEx15J3P0fCypOfbGRWh6DpaNzBzdqb7qR1fEVbW8hpZz8oAVTJotmLO6WQlTwnAgUvynfusPVuda8Nsc96xVoTyhx%2BQvWgKb4nPcqEvlFAEoW7uddXDldgahvcQMq1o1MUS%2BVLTR0UcK7qijw88pUbUBOrBuyt3ITM2j2dNpNSym33z4e6PbYLsZvFxWfxNhv46oqApWY%2FueujarXNM2kO7OHcng0v%2F%2BjFl8PeYWmb1difcQW12DaUnIGLwnS9s%2FkoabClHycmdTT%2BN%2FCDrVsU6jfN2m60zCSa783D5LsdHKlUe3Duc7XYaOE8C6pknbntFaL2FROqL%2FHdgNkNJSR6ZcGUBHLZbb7vk7q4Q9UaoqfnPpbshPtvjUq2%2BLPW%2FIagHq3VFUL2K6&pp=8a8741ee94d761015c17f6c96a09bdca&sc=38&ptp=1&ct=normal&cp=OfferOverlay&op=34&pt=productCart",
          },
          {
            price: "236290",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1231277206&ProductType=p&dat=u0DPexUETSzUOF2%2BZVVFce856sk2emniE47ns7AWdKHw9X6ApB0niMDTE9vJqB5TWF0zejBbqSFlVFal2bdXucfZEOL8vq5ubdQxISqjHd8ibet1EW0vVfnDEVJC%2F5cPQD8AHcw1eguhyER9Z9w377bbFqOCKGIZzRHyTmlwywZn6jt6Tb4j6%2FB%2BXEN%2BfWe7bL%2FYP%2B3k17kjV3TwYUxlGJI0XfCKALF5ZpxN2gxG%2FuP%2BPxWBHJ2XeFjQv7FN6a8jWndBQPsj42CqNVM9mWNLZ3gKS7bAOuldqSrzdgmoXTldtzudLWkmw6qeAMiLZ1dRifPX3UsVBPtPIAu1siSBucYnNzGNPcEkdfL0DY2AH%2B1RAV%2B2Yq1qvfZ%2BQTlgiA8rBaiTzDiSHkwjgSbs9ATdkt4r0JFSawZXYaxHPQa0OpvsSluYHHrJ09LjMPjJtqAK&pp=89e868a5fc44d35f951c6306fd90a47a&sc=38&ptp=1&ct=normal&cp=OfferOverlay&op=35&pt=productCart",
          },
          {
            price: "247689",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1229457016&ProductType=p&dat=KR1zHHtHXuOkjVWWBRqMKrO0a1hBbvWR778PapL9TQ5lN7Ddq6MvSjoj1RRplAtUvqHR4Dk3CAYvgZUROMFHKvylb6%2BXPZYaBLSrizJ7S%2FCd02sVBkjtTs7ctDXq0nhqoLSfTl%2BLPPyzDzJW7B7Ae6yr8l3%2FdeaFebngTtACM5UXyUfp%2FWjdkcH5qEXBk6HSSGG%2Fo034EIMuhZaGP1O5JYZS21qDvqrcpA8S2LKxfda43aEQ9sF%2Foa%2BIiBDliEQ2F09xEEGk22%2F%2BQapRVo5%2F%2FQFIRfS5LcQgEqtZGD5qBy64PyPqbUgV5SHqHnQtVI7rIN%2BfFQSwhEiNkGoNMIWaRyyh4u9zdPm8pq62q%2Bytxk%2FnckGdJSVH4t6zYJUVBqjPcPj8%2BCIpAy9OiOqhECBsNSROoU%2FPgR8eKFLlogpL7BmQTU8fQ5Yu9ncE7k7A8DEd&pp=4255a8c720085911e7d701d20e7c3452&sc=38&ptp=1&ct=normal&cp=OfferOverlay&op=36&pt=productCart",
          },
          {
            price: "253690",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1236325906&ProductType=p&dat=grBGMAWTyCmvSBW5wBkm%2F34uC2mppeWJX5WmhYEEYgSQTWdQZCaT4oA6WFeMMcFZT3d%2F5%2FXOg%2F4RAt3FB%2FwSUzJtPzttIEPhxxMKO2hMBC9x3gbvnZrpTDhul93oBulP1W3OHugAWHwqkTqi97pVwrnbDzHjNIo4JMnvfuaSFAiElZaa2hYGfBm2LRIGusCC5aBFwIPZYFhpu66iNiaRs4kGNbbETafGB9DOsdF8khscOfOGjfIFJ461XRp5TmYwHWdUh486t5CJb8FK6vMO%2FNUY3RFN7RWNtOSzfdpgtzecOvKmO5iAb0rCLb0IhDkuWE74zMRN4%2F%2F7mKHcv4eUFE%2Fv%2Ftz0NkHYSUyF1c8%2FtdvLlwCHFFpTj1R7LAQJPP5fX49AUOv3lySmdeMuncvaGn5TIQe14XchoOTHSU%2BM%2FY3%2F56ugtq3HtJ48deBc%2BHxQ&pp=df1eeed1f4bfacca5582a755ef906b53&sc=38&ptp=1&ct=normal&cp=OfferOverlay&op=37&pt=productCart",
          },
          {
            price: "255070",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1250578351&ProductType=p&dat=5Tn5cn5eTV5JaWvx3N%2FUOnJUR07Rm0AFEj4qiB0a491QhM%2FCYLar6He%2Bh7M67kk996cp93UYvLZsjhKOShEkPzgUAnBDJtDXnKF%2BU8SaBPh6%2Fiw%2Bwi%2F9vJNKpGRiaw2KlG6CC0UCDsO9CoPQt%2Fkouf5fTbbQSGy4CGkIGi4gxbaIfj6gH%2F5p86oOhOXBzXbFNBL3WY0I0%2BddIg7Zbj4U70sOI7Yo8ExcNF04ShaHDzoj4JU8dzkRN5FrD5KqL97TmUi4H%2BALScTWrpuugwJEM%2Birp6vT54Fhl%2B5664Gsbqh1StFdWwEbxJB%2BQQaS5OaYfEWahUGtD7EXGEQT%2B5PvQU%2BPjG72ruYd6RBcNV2isqGSLZC5fIVgYsdimPrgw4MmfHi4hveHZbcpnBAu11mtzd94P3X8HuqMSHowrLuc0%2Fw%3D&pp=82643a5e2e218cc0ec24fb21d0ef7c30&sc=38&ptp=1&ct=normal&cp=OfferOverlay&op=38&pt=productCart",
          },
        ],
        picture_url: "https://p1.akcdn.net/thumb/1228407289.sony-playstation-5-ps5-slim.jpg",
      },
      {
        item: "Magnew PlayStation 5 DualSense Galactic Purple vezetéknélküli kontroller (PS5)",
        prices: [
          {
            price: "24790",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1227537886&ProductType=p&dat=ywlbRJrNsIzPz%2BykKfflE9ZOxq4jSZNOQ9mNL7LJnz37PJIzkEhJgh2rv2hnYmeQzb11iliQA3Ig8pvfPtzBgvdYRZmD1sV2BmrWpBIIwxxVvvg78D1xIXUjU6xfvei3pwLxK%2B5a5WXjGd9iNmOenlQr604vnrIG%2Bmkz8URLQwJrTOAIeDQOM22jvq9%2FvpWqQPCDdypbbf26fLe3ssUGJ%2FHJUNmcywe%2FZUsi0xqLNl9VF57T0BtUKOelxEX%2FWzGJSbMfg6ZynnesYFZmX1EWY2qbxr2u6u50i6KTfyT%2Bm0c4YoK0DRDDp%2BC4pf7uqNSZRlenc9eIqw7PSqTb5R46AowhZApMsOopPIDD7aU2bVXUW3nF5rdUmDomDOBkppOt9F%2FlpjTnqw0P66SGQ9UPtsF2xxdeofFSP5CyUYJF6H49yvsb1vJXDF2zSJHTBAph&pp=a46450ee6574ea9f6ba6224e95cb765a&sc=55&ptp=2&ct=highlighted&cp=OfferOverlay&op=1&pt=productCart",
          },
          {
            price: "26460",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1190086639&ProductType=p&dat=YaHVICFpVFesSuPkX1FjlFMOGl0EQxaXbIdkPknfzwts2dII7iRGTbVAXEbU133Q%2Fl%2BkJ9S0MsvQuoNTfqpj4ouHEkFMbIDOkeoSnXCrSktERNeUlXc0omw1r9zSfLdDzaEQIKND5SYSpLMH2Ntnf0IcDdaqOn8aaOZEKbOO%2FbAlaIvK7amQt3wvw1rRo54QZRo7RyqoJsKttrDZ8Q9GUzdXSIRz%2FX5K%2B3KOadrpQ%2BnQdtPMfSqG03VsNa99VH4zfdgAHPoQsNtC2PtOV1T9n0nbeYSfnUolG7qogWJwgM9TChgAdvrAiQoTpFYRG1rCIABo8tXR7xJqHP%2BGwx8GyJ7mggrJeVmyen30LGjpN5t4YLE4jRwVHSmj5q%2B%2B6tONDaoENdu91sDMVlL2arhxImhaTffB6fSbRdczjyUYcHsGc2yhDKj3rW0AVj75Pj%2F1&pp=b7d7c7d0fe6179f4c7a1a5f52787a9c4&sc=55&ptp=2&ct=highlighted&cp=OfferOverlay&op=2&pt=productCart",
          },
          {
            price: "24990",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1249435312&ProductType=p&dat=7%2FV4T%2FdktdbVBxg5nL2X%2Bwob4VlrhLsiX7HTtZ0u%2FCtDvtogyBQGrKEGg1owOtY%2F0NzlodWvB%2BjLA3dQBiWmA201MBulq7EaIBmGoKpYA%2B62H0Fl9Uadc2pL73PTKsH85%2BuANoi9P6fMsqaV%2BrRnzAHN2YtWlf6HLxa9VsTX%2FgJunX6hIZ7wDBp7eeydZSZ6eZP8P4%2BxsIbMYu%2Bl27MDRU%2Fh2Srq8pPLnwqvj7ROBMguwzDSsoWWf%2FaoYIcsJho0CgOoCYktD52Wy2u%2FY5bPy0tKQSrRqa24tiwLiU5%2FWAmlQU8F7jXdB2y2R5ajH7EETpDM4bXsx81uDh6CcvmPln4CLSLmlq0EZQqXv7xQnsfiqgNg7oWzcQigpXNEHTFJKDR9LMJj2WvpwjYOlTncF6QWst3HiBmKQJ64u3k5uponimX2ItIUNECzC8%2BN45hx&pp=67504cf0b2393dd87cce4888c792fe75&sc=55&ptp=2&ct=highlighted&cp=OfferOverlay&op=3&pt=productCart",
          },
          {
            price: "25790",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1015510899&ProductType=p&dat=7SBWSLA6FwhQp0aKdDZCaI%2Fys6iLlKGVkvq9l7nMXR1PGhkN4LJs2y65MtQ9I7nAFzya1Nm5xDuZLpeQcp73JttowESQwaOAMvH1%2BpdDmJic2sMYGCxA7uQRn3ysjO2buez535LhnhOvQb6T46MT%2FycEQimOZ1rpdpp9Kty8RUpG0cDcJSUHmrZkeAQA9sGyHic4EmEU3C0TEZhqyYGPG1b0EGzWd5%2BJoQ7dr1qhcEwcSaHpCAecpttR7YJ3%2BoKLjjTVqGk7Xhc0blz3WeaS8jzCqBratHZt2UNeIkV8R0s1Fle1ELv2CekF%2BYVBrfExImiNvikNYztQjAanBLGVc360ckCr0Wsdg%2B4tmX5wZ09P3lneTt8aUkgK6bjYmrG2kxGcKvsXcDZTM1rcap6ff9wFxJNcrKAlAGH2xK9aXswgkfOnQnv41Oz4%2F7Y%2FuetH&pp=95d0a65547041f1eb250696083cd2e63&sc=55&ptp=1&ct=normal&cp=OfferOverlay&op=1&pt=productCart",
          },
          {
            price: "25989",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=935310126&ProductType=p&dat=079ukZNMbUGuYZec7CbTjbABfr2bdFctGySee6o2fVTxwm7GTsqKbraflMJBzEqQPKViZp6I7C6CemFrPZtxans4rkOWlj8gqHZmMEiDlT%2BbYD0VCNAwRmm2nygh8U21Jz%2FZ%2Fu2btIEu4dzuFnzgvKUCbXEpe4qimiwTIHn76R1Ew6uNxAwVA3NhZ2kLu9qw8TgjAixGUccBshzVKR8%2BJhSM0MSj%2FRimnzs5l%2F3oXNcqp3YrrpAU69plpFpzLz3HD9WBFjhFK4gNseyssndKfla3jx1z4bvSk9LQUYsFxo1hPNjumbPRhrpDcOewQWqN%2FrspxXIwXBPytFdjct0g2O4tFX6KvmIfxMwVvkUPeGxY1SK%2FBOwtMBUDpTgnHX53j3tWkhsS%2BW%2FaFGVBEPL2LuYdfJRmZrddVxOIsvxNJRp9NayGpLIjVkivN%2BeYS06m&pp=18f1434b6efb9ef6341bd7c3f1fdd6ea&sc=55&ptp=1&ct=normal&cp=OfferOverlay&op=2&pt=productCart",
          },
          {
            price: "26460",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1190086639&ProductType=p&dat=YaHVICFpVFesSuPkX1FjlFMOGl0EQxaXbIdkPknfzwts2dII7iRGTbVAXEbU133Q%2Fl%2BkJ9S0MsvQuoNTfqpj4ouHEkFMbIDOkeoSnXCrSktERNeUlXc0omw1r9zSfLdDzaEQIKND5SYSpLMH2Ntnf0IcDdaqOn8aaOZEKbOO%2FbAlaIvK7amQt3wvw1rRo54QZRo7RyqoJsKttrDZ8Q9GUzdXSIRz%2FX5K%2B3KOadrpQ%2BnQdtPMfSqG03VsNa99VH4zfdgAHPoQsNtC2PtOV1T9n0nbeYSfnUolG7qogWJwgM9TChgAdvrAiQoTpFYRG1rCIABo8tXR7xJqHP%2BGwx8GyJ7mggrJeVmyen30LGjpN5t4YLE4jRwVHSmj5q%2B%2B6tONDaoENdu91sDMVlL2arhxImhaTffB6fSbRdczjyUYcHsGc2yhDKj3rW0AVj75Pj%2F1&pp=b7d7c7d0fe6179f4c7a1a5f52787a9c4&sc=55&ptp=1&ct=normal&cp=OfferOverlay&op=3&pt=productCart",
          },
          {
            price: "20980",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1017155022&ProductType=p&dat=ilPISNMEgSUgStG88vTO9AYGkvWSY9LpqZhqlxftyl3zGEtmk6Px7v24o9Uq58GoRX1ewImhq9jKl1PPFfd6p6rpgcTY2sjRWwTeZv56sttZrez6RatoioQtzbrJbZOMpdfLOPHTwOjqFYI0QPypKdcAp4uy11kaaGopoDjML2ldZTyotBL9eO6%2BX%2FdCzcQOxM1cg5i%2BOkaAvR83HTJ8nKE0KeI%2BVynhgHM8KhnQ%2Fmt29QDkiMZ3YZJqiTLEKc8S0qAnBK93lj%2Be9tfUoDdcAWb9%2FK0yY50DmWyykbAQXHt%2FBpWxxjiAK2DDtQ6GYRempoWmW1kFVSypZilaiq11ahJNxz2JsrUyG6bqmw0%2B83LYoNCzxM6OVfZ0vjwt5mCUUmPJk8wG4PHQm3mevm6jVENur4VIE5K6%2B7oxAwohus6mIVwJJTtPwXel9kLmP%2BIp&pp=c7d797b29e1917323ebfa49f19a72efe&sc=55&ptp=1&ct=normal&cp=OfferOverlay&op=4&pt=productCart",
          },
          {
            price: "20990",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1186305805&ProductType=p&dat=Nk5QdIJDgfDIuL95DadQgsMO5tlKfEE0T%2B122Q1qodD%2FU5xwGGt8pvRnNbUYCIaBgCajeEA2hWvYI28opg%2FfGkCY3DGz0VfJ2m6pcNQZPKnBJxRgjcjYp4Jj9LnIKLYcHr4di5MuSuVmNeZ7l0IOuyn%2B%2B%2FQ7c4tw6W1y6fwYhEv927UsSqK5VfrAUxwWZ2e%2B5oROWS33HttSrKGfNaKFO5e15cjNRIgW72Q9CfqHaNSkmt2v45jAow9z3kSpf5AHjGLiDnkOIaqvBiA0ezAlCJVVx5lWizGLaqgwxO1%2BX5cEFYGxKRYESLJYdTAy6s3lrAVa3141jL9N%2BbjxKkXamSYngVYP%2BJ0CAvLuscgjJtgn3q2VK8s0LBr2Mj5JCbdddWCDhQEhGkhZpf%2FYInTl1NOHZHmbY6i8N4BXoR0NHufdMOHsl9SPlaL1ogdncIls&pp=711b9661938e438d2ae661d69c13b40c&sc=55&ptp=1&ct=normal&cp=OfferOverlay&op=5&pt=productCart",
          },
          {
            price: "20990",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=815430516&ProductType=p&dat=EpAWKzt%2Bp5G95s83QU4UPA6%2BT3UZec%2Bak1kR3eqpbLUxEFIC2RgiX0ijs4zHpHJ%2BOHdcxPnnDMJmENMBS2yJB2tgcIYFJvJEdqvgmvNmjXqB4uqHZbb%2FOFP1mkvMaIoEoeLS9ZzVJDmeFPLAyJ%2BOgVkUo%2B%2B55TkTidQEiKbROwvOaW6WlEQA5XgPfr%2FE6vKCr5mX%2BHwWqXkOenwsNvv4qfF67AGTjgJhtiv793J9SvSVcsYirtbdGbvBPFvl5CzClW1xMlyygP01voDJ2%2Fsfe4ylEv0htpL10iNJulw73Gy1%2By92MbbzfXEdcrp1emnZuytXhmsAicXWlIchH%2Fvm7cHAxnjQ219WKUPb85J14K53bcjurvpNV1Umpg8zYq3jaVwlxEb1Cm49z4oXcjwQ2BlxIGWgpBT2P6j3dITr3wHwaEAQu5T30hFsjr%2FpMQE3&pp=0e72230bf03ce00bd159f219c666b3cb&sc=55&ptp=1&ct=normal&cp=OfferOverlay&op=6&pt=productCart",
          },
          {
            price: "20990",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1252215697&ProductType=p&dat=QKKLWe920Kw%2BiHvinplowZR2qdtwlxmtNwqYLrTD6LnHKYEyLYkLq%2Bxlhn9VDm7bdkMbOXzwzH8q0PxvKIDtZbolpH2LCH7kvw8oNv8ou4LimjEAUQS78zPr558LJ3G27PH81iQDAMCDvQxxFkLUimPDxZZcXdaQ6dx%2Fy3Dv1ZZI1WM%2FS33tz6uFuGoBX7yJCFxKe5QQRBKaRRGlHt%2BgouRTZ%2BDs%2By%2B9EIsz2FdXFfklGU1FlC0Ms8%2F3ESCJOTsGUjlFtgh9q8VvhJs0eKGvBvYuCfv08rbCHg%2FnMvJ%2BYlAsxg4Ybfr8h3gvHYhsJW4Flj8ipQoDMbtMDG06PYYpiBeHF4T18lBqOzZtElswTohFfl2aIJi9enyUFBtR9BExLKmyWJ7llNQCIdtDsz0ltVlnde0Dmej3%2FIe1fJa1cOPk9adcuM4YhzRfXrsBnbyF&pp=553ebc14109e6c46d88869013f1ce6d2&sc=55&ptp=1&ct=normal&cp=OfferOverlay&op=7&pt=productCart",
          },
          {
            price: "20999",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=776223117&ProductType=p&dat=VHZ9LC%2FA3MIptW14CmbUyLM4rWnpNKoKblkXQ1rjsGUi2Rd5tLlwFNKg0eSL8RH6RZjgskfgld85LBwbVlhKv%2FVzXXDtBML2BINDgdPYORufn3e0VtlG8sHU%2FzC1FdIC19YqFLZbtDB9%2B16Ve9UtCyn2I8Uo6uRzNmFopewMeM5j0MaiMxNCWb4gSzZzcwUftSG8NdCLC8o6zmpNx4VVImwrchRBwmypbev7sFqBP43tpoQAPkqc1UKN5oY16Qb3wkedoEB4dvF4ai43szNxQusFdovf0KCRXYh1oUyauZjuMJ%2F2E0SAQbZWQib%2FmmT6eNP7tk7VY9HvRKWc4Ztvl29Oc4oIMPC9oo3gTS1Tta8PKCnocEByzXoTTiuGQvQ0QvIdRLtNnqKS3OnfTG39HV%2Fj4PV9PX9h6iPIl3KWeUWZ6Jvku1riYJfS%2FCNDJKNE&pp=6fe3224d961af03990c91c05bf1aecfd&sc=55&ptp=1&ct=normal&cp=OfferOverlay&op=8&pt=productCart",
          },
          {
            price: "21990",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=768564591&ProductType=p&dat=W%2FEvs4I%2B4002ckFDC4njTM0bzgfnjQozjHHbfXsGzK4QcJnNeeO12WQdqDkgyF%2F%2BYQJuIvsorBTGH95tqpplaIR0HC86cSHItyKjd4CTmoJ4xcS1EzBuQWX6ftGKTKG82goAm82Nuj2YqcYrChd4DIEIAdkHrDRJe%2BRBgJMa%2B3b%2BGv7foQC8hPmM8uhHpP6BtEmAI1B7zRhbV3pR6%2F6%2FyzoxNSvhtEre%2FnKUjvoVA9Jf7jTLkdt7wieq%2FltwfaTtdrxEsIoyPBJkqM4sDcK6jD07sILampTwNmFPPsBcMCXUT4WNtjVyuFVHyVtET6Pn0Y3iEZt%2FC%2F5DhCRjRUQ4N0j7JcHVg6RYscksB5ZVWp1qLj7yewFhJ6BXJxwD1dFKtRNRs4D%2Fq2fF1nmc2FnfBGM7yRGamUXaYJljLt8W%2F5Q%2F%2B32otyWF19V%2FW66bo31J&pp=65ad6939573cf6f97f0d16c5a9b94aac&sc=55&ptp=1&ct=normal&cp=OfferOverlay&op=9&pt=productCart",
          },
          {
            price: "22500",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1222612648&ProductType=p&dat=fsfSYp051fcK7qXYzoH5Qq%2FlHzdmdIzCKmQQQ87iAaoKdIbxIPgT7UZgSPqdae2ze1LqtI3spuL3W%2F4RjvyDIfWcaBN6Dn6RE53C37I%2Fgelwz4xgPnv9r9KS4aApoLoOp8h8KhWbm85KcJnW8MA1aBnfI6QmfPdPm1vBu9Bmh%2B6%2FjlengzyKE3MUkaBjzTYT85AqJQXe%2BrYCmCc35VJFxpXNrWtm60KfBm5vzM%2BEVyhlVlt4PAKE04NNgc3Df%2BBnU4u350pBnM3Q%2FhExBp2T%2BCICBo9pqLFtOos8G1TC93w424xIFQzOd7RcBHeW4LN9Ue81KWv6N6zzhOCYOvoSd27dlBhmS91KIgaabMGcrenG9Y7hptcknuYGd7vNdHgkNilj19eZJX8gSc6SxbPJ3FzNyeZPijZgvoNEMc1wIUUoKiX3h7ZtUQQ2d3wxJDYD&pp=8d5eed2bf40d1d41b78b3d5b2e43f278&sc=55&ptp=1&ct=normal&cp=OfferOverlay&op=10&pt=productCart",
          },
          {
            price: "23330",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=965775615&ProductType=p&dat=plg%2BF3vPFojRqkm1wkt6ux%2FolPR9t6CVFo%2FNYKcSOw5iZgvgetZ25tEa0A1xPP5IBmDxRaQ%2BCu%2FIuznelWHBNAWqSWGvl%2Fo0oEjE5GRjaphtN%2BbUxtpC2HgHc4xJXMiykj%2FUmWRLAmLl9FjsCaVodNy9GmWciD6AS05R8hTbCzhMUhspIqUAfxN1s9pl2Xfwsoe07RyYYIp%2FN3M%2FyQnXfZ0w58Y3Ejg2SqC8Qs2j%2B%2B5HgFHh0Zn8qrSwTvc0wvNfzuVC62fCtEIyiFcJzYdQM9P%2BTpyp3aNY0r2eY8Uo3jlGQn5fuv8vw6Tg12w6ArSkBK2KIhwvxZ5Yrp1vEv8s7900y9zh1cM5sDwVQB1a1hzBWToAQrAVsR1Tt3atj%2BCtsUV0tKh%2B%2BKV7DP2FVZk3gWhP4IDsb3ZmA8yzHdMr%2Bxg61BDrB77Da3wZ70Lv74b%2F&pp=76a88f42ba81ed40c3d42ced9c8a3940&sc=55&ptp=1&ct=normal&cp=OfferOverlay&op=11&pt=productCart",
          },
          {
            price: "23700",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1229602753&ProductType=p&dat=MwZdkxrCfmLXcTo8LfKpKzreEdHzg8S4psiGUSSPmxqa%2Bb0hVml%2FXeLzT%2B05K61wUFk8G9%2F%2Bs3akQo2DOJ7YGc7X%2BkIWGBYlvRG6C1Nb9HOKyHP%2B%2BlPmdON3Xo636ueTnlLsl3gX7ZJGimgfcLmyELQYF6FMojFWCtR%2Fy2jXMLMQgR68HAEdJklk3RkHRJhANVa9kQeFKPXg8A9Y4N0gCrCmAcc14Y65vWUJTW%2F1T1qKiV%2FqYokEpaJB4jSm0vz9bykBcUb%2F%2BEo1LCEszhKDK35hNIdGQBwo8%2BKIAJiN9tgVF4N3vB5F58PK8NC5GGFvEn%2F5yz8u0xZ5MrF86QyI%2Bpz734M5PNb0R%2F0c46GpFnNfq5TlnqXMap7o3cKdxyX2u2eiXP7%2BXURS%2FbaIRZY9jBjxAsJ7PFCiFYwp3D2SbRjVmXFg7ESUxqMGSjJw7O1t&pp=d0839893dc20923893c1b8bc12b54ab3&sc=55&ptp=1&ct=normal&cp=OfferOverlay&op=12&pt=productCart",
          },
          {
            price: "23708.01",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1236323389&ProductType=p&dat=b2O1JeMv1L5Bn6r%2BxlH7TwerNxYYdLj4NXDT7Aqf4BxuFyV%2Fidls7HG2Ke1BonzUeQ00mpEEXkI41kYy7FuMQ3RB6eCLcwMrYeiP8k8ROaGXYOYffpo2Esz4EUlun8Fn2sJjdWZgGR3UAyAQbDZDD9IWb6VgtVpIlWk8XvKNdkxnVZiD49fGvR61FEIzK2wLB%2FvOUWUoEuITdy%2FC%2BjwhSL5vUYRJkwZrFq808cjw2Wva98gef6Du25S2MUM3JkSZcmtk%2BBPW5IAgM4X%2BYPTQ9nBcorj00knjc5AoPj0pZf1nqpfsSyhzUYXtt2woDWPLMHK0AxlRXJbMJMT1eH42RC8TaiviJHb06DqJY56YLDDC43w4y7EARsc626gFzBbKjEYo8Iwju9xR82H12OXcKnf2v4rBq05O7mkTfeB%2Fco4TEeyyLq%2BTyb%2FTt617e%2Fwg&pp=79b33d0698a3e3d557d92e74caee57ca&sc=55&ptp=1&ct=normal&cp=OfferOverlay&op=13&pt=productCart",
          },
          {
            price: "23800",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1241987377&ProductType=p&dat=lAWC1nW0A4W0z0OK7yEgqKw8lqKWQI9PWjfjo6ctMZUuVEVa6%2FxyQu78StWZipY0IfNNT0Golyj6G4%2FzJzoIZOBp0GIsLGgz%2FhDz%2FUaYOKnYTGgUx5yu0oS6fRi5u3Yv0pl68pPxbw7HpChby83IOsnhUbOFhJdrgp0n3lovGV15DDjO4M72thPjztNz8yfaYPq76B8LXTX6CnIgjSKyFQRAP%2BR8P6%2F3wAr4QmWho42LpKwd8f95BGXHeQeBg1rWUgVNEVrU5CWLRBn2%2FlelJaeqltoPn%2BUVANhx7AkW2xmnDlo16ep0WDEtoOdIXbdCDFthr5KOxR6SPdEJBWmd6u%2F32oubO%2BetbgOFtauwWGbiqdgGJX1rYMIu6YsijZM6OTnP3im2CTFSa5IyuwguoldxJoJRB0k%2BQkELSKSmKgYb0WlCY23BjfA1LuGqdkn3&pp=84a98dc5c9bf6cc5e6675822686574e9&sc=55&ptp=1&ct=normal&cp=OfferOverlay&op=14&pt=productCart",
          },
          {
            price: "23990",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=831685734&ProductType=p&dat=1%2Bo2QHmISMPpyHdJcRytE3bNcFvByPJYIP1BazMuBZjDS8z%2B3rTHd6Tt5HtgSjQnFH4TrEc1iJzhHJieHw3ajytaQhHeVUKZrH00cABoDUtanfgbeZQilVjfX8cOzQ7UCgqaC4FDNcHcYnC%2BEsJduykMaC9iyGy98%2B%2BVb7lcOa4kOfGtyLWvU0Y9I%2BO3uiQ9wfzxGrBeDiWe%2F3IYNh4qzneZ9nJhqho1Ck1HfluqDhH%2BThmI3%2FJ9JlB9ZfY4VshBGgx0%2ByHwK4pLRx7gJnEuYPIdsOOzUj%2FELr48VLsLQYjowWMKYbiUlkRD7ITNSmWukC7oMS1%2FRtaLdENXhyDUSV1cuh0%2BeATlofupJPf0aJmsz4o18oErGJBZe1uy724KgfoTwLKe0%2BaOL8hC1wfN4VEiwfv8wfbqp41NzDJ8TkawwdXOwgJEs9Q%2FiZ%2Fb0PkA&pp=168cde98f5923157006cdc1aafbc2617&sc=55&ptp=1&ct=normal&cp=OfferOverlay&op=15&pt=productCart",
          },
          {
            price: "23990",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=750830031&ProductType=p&dat=ZLNPgjefhn9PA%2BvqpnmAB4rHR7R6fx5weWjX%2FITK7jaBXlKOc0m6eRCEeIARWCcZL9RH5ZevvvlAxiNrPH5SkvI8ypZtWKFvaCEoVtR9glFQ6EiVWcmdOBJV53BKAeeNuZi3BmPrVT1bh2BHOkq8u8oFoiOIWT3h7qjB%2F7yrLtNyxlS3ncorifdgXDaSPglnXGPw7fgwQCM%2BL3Ai0NQPTnjFZy%2BF3cDSQfMWtdPqOo8uIEWF%2FggAMZ985DqhmSd09yo5IW5aRWGA7vtev5aonvwm9K6Fm03bJPSLWcZqt89EROJu5I9qb1hC589SPa1%2Be5BwYSn3imrb%2FNfuqPheT1hIW7y%2Fc6v2eoArxCftKTY1l9NhbH40mguvq6BPGh5JHmaDkGXWvPKLxYaGVsLR1hDneuK4DXneRoNe0JWenmv0m%2BR1ddg1WvksFAFejbbt&pp=25ab1ab388d09617184ba00d6b0eaf35&sc=55&ptp=1&ct=normal&cp=OfferOverlay&op=16&pt=productCart",
          },
          {
            price: "23999",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=827265642&ProductType=p&dat=%2BWLjM%2Bc5BkG0Kh0sQCIkaHMPIwv%2Fd7cjYVQ8I2%2BMmo%2BZuTBWHQSnfdBBuo14pqRLvQ6e5vIrWCrxvtlYFsAW6SImijJiv0usodQdhk4NH8bL51je1SnsmB9EC3y2Aqmp6M54PQ4rYtvWw1tTEsiFRK9eTTjeTeOJ2CuRhGwLFQloO5t2XKpiIXUfF971o4nfPK29TgQL8MGbud2Kzv8GsD8KCpWkduuuV%2F2WivKbBjvfpcHivTgJuHfNtRrN1USv%2FsPvXLSzrb4Ro9tAJEMf1LSI%2FfDuDqR%2BqYoZNVsJMD6ECyXkHaZ3Nls0ubd9B%2BWNL2otpAoVI4mmiqHgd6%2FrrVOyDWyJwsoW%2B4aWm7lMMxDorrOFmuIolGnjFwtidGVdQrhdlMBk7iQVVfOr2tyIL0faqEhRBXzYq1bnevn1krPvVRzeBtKAyCxHiCvQ3tlu&pp=a05bd1bf631a460bffc946653fee5328&sc=55&ptp=1&ct=normal&cp=OfferOverlay&op=17&pt=productCart",
          },
          {
            price: "24236",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1212354421&ProductType=p&dat=JOQ2rl%2FMGNrYT8lpmTmAIEwr2gPXKrm%2B8YV50rj7kwIpy2u3o41dTLxZ1XkgFY8ZiZFMfMz8S8eZbgW6FuMVTzYEGXxTfxf5zp%2BC2AInG1qFNh0OKOADxe%2Bx4fXlxngM8Bx0Zubl8yaP%2B088USxOP%2F52ITyHxuLw2%2Fgbp0x2hhVEhT5mBNa8uB17BcT71JMoPZP1RiZk%2FsXKPVV4Ub2AJ32XB66Mn2F%2FGy0rgbd873g4Keawl%2FLM%2FOEqoJ5YM7rFVYYtA7EjwITwo3Dy3g%2BbFj%2BvTuVFAqsqJcEQS65u9hp94BC7jL%2Fp%2F5FIi470MMi5pzT8ISdmAzoznk%2BYhDtaKpRCbDW8AGrjIYasnOAz5%2BgoqJk0IWCA2kxZrIc7lM14cPB7pQiC7WhnYoIiAlTDwDX0iw5KTfs6mtaJ%2FzF1a1gklKrKceEWQK5YI0JKFqZg&pp=8dbe539e904708ef98961b85f5d6beb3&sc=55&ptp=1&ct=normal&cp=OfferOverlay&op=18&pt=productCart",
          },
          {
            price: "24570",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=829069590&ProductType=p&dat=81DGkP4uXixmQyHfUerM0P%2BczDoOoYUZVTbfw44VH7IPGhB2HLL8c7nzgFkLvP9J8U0c0L%2Bg3GKrdVZc7Txq%2BoQMxr4H96moWEfu51dymkpKFbpv15%2Fc5uBW8T8RL8XX4t2UldKwSGaHfrvNIklX52kAYTKi44j1lky3Qx%2Bvcd5ezdnFOsmnCY7fJF42%2FBFSn%2F95zt5M%2Fxves1AWoU4K7CK6V5o7Bfm2TGduO1Dr9aeOAvGiuP0ihTP70FtV3Khcgpne%2FjN1keyEVj5iPDFIG2fwGj1wm%2BiT2UZrKHYrLItAxb7KEU8r7CXWyObG%2FJQwetICfUtLmbsUlEZfvWEMlLsTrpGoTPsdxZgJaJZGtXdsKQuelVgRGqMZFnmdZ1lBdQ18FLI7ORnRSbxyNSON5RtxTxEzgLj%2FGkcay1LPCYtNLSm2C3pdZCgq55HKtfWA&pp=045a4f13f56d3da1c98d5e00178536a3&sc=55&ptp=1&ct=normal&cp=OfferOverlay&op=19&pt=productCart",
          },
          {
            price: "24690",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1204359748&ProductType=p&dat=0Np25ZDMD%2BozrsgjwSTgZlKeEPyJLC4JRj4cOHc7fbt%2BncuEQmTk7kVE2vwGWPMwzWi%2BAR%2BkvrbLbs9NAsnBIwIgcojqhJ6SXjVX8c4AtODwf3z0jpSVgmujgs56OLnwCAvkDVPAz8e0GoVTrVh8yCeDBe0Pc10A36EmaQlov7vpxdxR4tPTHXgX8oZtNdvitXQp8J%2BC%2BFlLtJ0V5o1wX1KFgbvhniLV2Q4Z0ZiNGIwCppdkh6YkMWCSm9NEFTtzTEbibYSpixJzbwDiPQuuEwqTKlFtcl1HSQpoSSZ3MiEPiPbKpChSK2IkW4CF%2FDvy96HU4g4sjS5u7OvIokVrGY8GzCJ8uU6SUv4qR9j%2Bfu9F6z5SS%2BgiQD5PApn5PAkiWLWik33ujc1d57NYS77SOudNiNj6CZtoLrLKEZveD5YynBkcHjC2G9Gcxt%2F%2BSNW3&pp=e2005f6160d705c4871cbf32ab2d4efe&sc=55&ptp=1&ct=normal&cp=OfferOverlay&op=20&pt=productCart",
          },
          {
            price: "24700",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1253928289&ProductType=p&dat=xr3ZDHOXqg7SCevPOHdhrgPLTSyD8D1N56%2BPk7E01nrVFaXKhQE5LaanxouHnFMV%2FtiEE2llEVkdMeupF313JGJiOKEU4AZvLMdH5vuoU%2FiFQ7x1nF%2BFNLnJIGW8IsTBHI4h%2B%2BrXidx%2FqN55F8uLgyEJx8o4FHslIwhINFjGcVLL0xLQpNBgy%2Be9uVU3DtkJaUh4ZoPg4VErnuexRcCCIzO6qnZe0WcCuyGxPOJYZdK0y9UXGvpsn%2FsZxlagA366alHvNUh8IIPzRlr51oQZ8lUcCqlXu22NcXkCguEHDQv9cBUcWr2Fw6d%2BgIW71aEXCvdvnKc2izc1PYE%2F8i2c%2BEmhBHE97Yx3q1oC9JRjwNa0lv6Sj6gR9ZOnAxdbWnWbGmHZ%2FwC5B12F9XyelLD%2B5OvAodUf%2FW3bLLPQDyhBvwDp1Y2dUX%2BqSRYZGJASVrAG&pp=8954341326055d3f4c7c3524a70dbe97&sc=55&ptp=1&ct=normal&cp=OfferOverlay&op=21&pt=productCart",
          },
          {
            price: "24900",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=899556597&ProductType=p&dat=akP6%2FuP7FEqdp7VHOt5qKGcybxbaNgH%2B6YSnANg%2Fyn%2Blv4ph2okE2Ak3fngnBj9iY9Sv1oUwzRV8q2qzvbXZd4rservfDjaTE4TF7bwIrJPrcJfpIoXF86pjiZwflmyNrWxkw479XY8pNByGeOTGEsKPZ0O%2BaerLb4J4zo%2FHKEspf63cg3scrrDPsSKzBNBNzGKvlSacwe6GiwSkBoGET4BhrQyTci%2FI8sDVDb%2BTfsNJs4FfuHF5LzAdr5dtOU3e977tkIwTVR2rNOYmniAOk2BhIoB5g98jx4Q16UYIJUsMXtLeKAJ%2B2fu8Vku0A1jI0St9UItd8jwofWKi6GcuGXCHE%2FAvrscM1%2FelAziqmuUhfkFbqT8bx7Gi3X9hP2seNZaJNxcwjMJhXLyT3s9YPKxu2KIi1yz1CKaHvvBTHAM4uifch1bkJ4vhlYBvui0z&pp=b249f32be0e25a32c18774ca2a66438c&sc=55&ptp=1&ct=normal&cp=OfferOverlay&op=22&pt=productCart",
          },
          {
            price: "24990",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1225743751&ProductType=p&dat=iZu56kKQ5ptdKFG1YyehXS1G2rylxgwyxia1bFgdWcgAQR%2FV9dbpC8SUzxIyxx1Nu1xuh3ZpP4J%2FF%2FZOMeJ9BuKpARyGarbNzJe00KFvH%2BWHxrmhg7ZUbxqBJItg95YwUOyS8DFVQojQdkxkRt%2FJ%2FJIobjGTEImH2tcbz9rbxCBfahnfZ5K1nqHHgCmrH9yWgzVLur3EDynC%2BLDvWA5pPC%2F82dygia0xCyv9UaADy%2FLcJwVFkddGotxOrVZZhR72AxpZAk1%2BcglqSmavmWNtwNBjLqsi5Gd9OOyheOcF%2BH4NqUNOcASGEI9IB8VUhXV7QkezKkuv3lDu96%2Bifvep%2Fji2fTH5AZlaijja%2FimNP8NKtCuAOMZMP68Qeva9LGn%2BZedXG3PxNx5AXdfNyugQM7i1dt%2FO4KthmXtBPDs9kuwZFS876L2kofn4pCnQBu73&pp=5f5911ab04a46b66599b16ea9f44b2d8&sc=55&ptp=1&ct=normal&cp=OfferOverlay&op=23&pt=productCart",
          },
          {
            price: "24990",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1241988091&ProductType=p&dat=m%2BerPA6R4WgrmwKXyWO9Ec6v5V%2F9BoagFOSAsL7ptQ%2FlJrM7WSPx%2BbHVRNSa6qfOr2apB4lV1vPznOjuBzBN%2BKTZ%2BF%2FV7R96%2BqPWRVxtkXWuxWyF19xpPYYOJXpylxlNBvBXUo0HrApxDzF4bzvGycnDH%2Bb40BSSQrF%2F93OKDLSASAs8ks4EzrxSUTXhgNJkZIxxskjjqJoRtDfIx97dfEJEFPkkIs%2FW5B%2FQi5pYEHpjPaLcFrzAN4Brpvml%2Funy2n26wWHAbJ3bQJrQTwolu70%2FH0hOcMY9pouB2B5TzFQuPaWtVsNswa3l%2F%2B0T2HD4Vh4pKztfTZ3hLqbjWjYdvOCUA35xAWe7AKYZYup2FVVrMlI6PrkOnq1A%2BmEFP%2B9BKoPi0bMHvvmqqE0Mz2Oim2xdw3WBYFy%2Bk7SyOBdUm%2FlrNZp8we7SeKD6lNHBmSrO&pp=14b72573e9a12075000f5f1290e9f679&sc=55&ptp=1&ct=normal&cp=OfferOverlay&op=24&pt=productCart",
          },
          {
            price: "25190",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=827148090&ProductType=p&dat=vL7qz%2BnkYozuv%2B1KGW6whi2q%2BgB%2Fr3%2Bn7jL5TjhGYM7AUUbxRJ5AymlyLJuMTxwdIzAIn0B9%2Bja078UpmLkaX3wmkaGtpPguOeSrdYS%2BqU44g%2BLzj%2BqW8W0%2BNghfMSKRCmZu5gQTNX%2BpSxnnqGD9U0j52oZ0NDGWazHLzpmGz62SNQY928QbewV25316Lg4WPMnIETBcNxbowe2h7i%2B5mqi8nTPEmAuxeyA%2F9JJRwvo5r9X9RjQGIu%2F9L7mb4KRumT7hWV9PB1duMthZ5HnVS6b41fZMQX2dFyRrWCzGG61Z%2Bg4pW7lyvdDy1TmNsbQSdXmlT%2FWw8aq1I%2BTZf7AE7WeEecuKg0JnDOSQ6dYOqBrefG49koqYcVyaOM709qYVtS3BTXMgLPZVL0gU6jiZaaiWjJhifoY4SHlv0PaISXUhEGVCzXzUqW8S3Jb1Q1D0&pp=2f580c0e6e714f8f25efa0c275f30320&sc=55&ptp=1&ct=normal&cp=OfferOverlay&op=25&pt=productCart",
          },
          {
            price: "25361",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1156279581&ProductType=p&dat=moOiyk8mDkOPT9uqwk4UqemFeisWnAAfVwlMEOjDkAmo11KVv7v5RpdqhKLO8pSI5DnKq%2BKE%2F2nVyPfrZU1%2BaL65vtK36aRsd2H%2FpBla%2Fx3DBexIVxD%2FYyeOfmoUfviu1%2FTVncfhPKP9ofGTNAseRqfJxpGxo2%2F5t2fU6WaK3sXtq1Jp59CchdOupnSXFJe25daIURwa9ZggarDNee5siLWgHqe0kHnBZ1RP8qXQsWxPZ0RC9XLn6XOlMof7lDvwe5JqvNqMkan6XSl8DXgIVuTtxpdIXZ7PcNEWuFUXW9n3TorUzbKiVjVcKeOT1tUzvsn8GzZfAJmh2s9hxTs8HdaDMVnq0B%2FARzt5LqxdndX6ojiY39ZHM%2BK3tIYr5NMaXF4uFikWOcakdKjrpfT2k8oox4oe7REmhp8epPsHCpnzOXzsKbszQgEzOIjlK1uM&pp=afff374f1413afa1042585d0074e081d&sc=55&ptp=1&ct=normal&cp=OfferOverlay&op=26&pt=productCart",
          },
          {
            price: "25390",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1250638729&ProductType=p&dat=oZp8eqYoI9bItpAzV2zQau0y1uoxUVAxkRgrN2giDzPyhy%2FRcda%2F%2FNRMUH%2F1wpore%2BxMwYt6E3THul7%2FJQqWxWMuQrZmC1TKimQ6oz9J7HKmWu32%2B%2F7KcOCmJ3IxPBLWrQ5FQQfjAIDq17Nsp5AEn7j83QIitiedwKoFmAYcaMDRcqrbxlVCS9jSqGT6OG00KiCNGEk3BHoP6qnNrpDMT%2BvuPlLBrxKtQ%2BaBb2NqpTuEPb%2FOnnqMY0N2MXG9Icj%2Bl%2F8tME7ZLRSK7reTXil3HjNjSMY4y95f0uCOBKXzj18%2Bh2V0fqGjGZsCbarBQ%2BAkfZaasGzk%2FI8SCykKeoN60ItTM6GtCV%2BrQGyqb8XQDOOJKWM2UxGxss9W30c9xQ%2FKjVA1q6qafjze9DsrKC%2F7eOuwmeIutZtjKe3dfs9t4h3U5z9ulDP3pDx09a1%2Frt2y&pp=fa5b7ecce144bd502fd95a234a939804&sc=55&ptp=1&ct=normal&cp=OfferOverlay&op=27&pt=productCart",
          },
          {
            price: "25790",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1015510899&ProductType=p&dat=7SBWSLA6FwhQp0aKdDZCaI%2Fys6iLlKGVkvq9l7nMXR1PGhkN4LJs2y65MtQ9I7nAFzya1Nm5xDuZLpeQcp73JttowESQwaOAMvH1%2BpdDmJic2sMYGCxA7uQRn3ysjO2buez535LhnhOvQb6T46MT%2FycEQimOZ1rpdpp9Kty8RUpG0cDcJSUHmrZkeAQA9sGyHic4EmEU3C0TEZhqyYGPG1b0EGzWd5%2BJoQ7dr1qhcEwcSaHpCAecpttR7YJ3%2BoKLjjTVqGk7Xhc0blz3WeaS8jzCqBratHZt2UNeIkV8R0s1Fle1ELv2CekF%2BYVBrfExImiNvikNYztQjAanBLGVc360ckCr0Wsdg%2B4tmX5wZ09P3lneTt8aUkgK6bjYmrG2kxGcKvsXcDZTM1rcap6ff9wFxJNcrKAlAGH2xK9aXswgkfOnQnv41Oz4%2F7Y%2FuetH&pp=95d0a65547041f1eb250696083cd2e63&sc=55&ptp=1&ct=normal&cp=OfferOverlay&op=28&pt=productCart",
          },
          {
            price: "25890",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1253879248&ProductType=p&dat=HTJQOrNkqWupjY0raJSOsumXwR0GuM0hrAjOhxs8z9vJ7k%2FW7G%2B5oIDe3TU6g26THnHLzbfZDq2oNKR%2BvFA4XtDsZ34P0PHy0J5gFCtS%2BKy4FqmAdL%2FKwJGjDEBWDaxmqU7AlKQKy%2FpXl6fbK%2BPlXD4ImMoNDr8U83fI3S8jgOfMzwKwU8EtrPf5DmhFG0qujaUD%2B3N8%2BAhTBqwSG99xbX2IJJ1AJ7%2BqRUbxfuWwTalPVU9sq8VNi%2FVl%2Bshiz5L9QYWAgpUWENp8%2FH78uz3zziLZgrBpk8Amu0z%2Fu3HRsKimqmfPGpYKl2Wzt2vPPVLQWHBvm%2Bt6RzVpOlOzNzuU9ZByDFJU075NEJ7cOQWNiah0dr7rvpPrWGFZoa5xLYJUY17ULni%2BcW9OFUXhs%2BWyeZvyzT2K5cM1BGSsW%2Fdqxv723gG%2BCBeFa6O2%2BxnWWsQV&pp=4eeb5880e7ea12b1841582c9e7f5f073&sc=55&ptp=1&ct=normal&cp=OfferOverlay&op=29&pt=productCart",
          },
          {
            price: "25890",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1191421747&ProductType=p&dat=i7F%2FuWN1XP6t6ACj9At5omPOgvridcfrEhTCjHLPIu6zE2CvhPFGkRergM2eeL5x%2FEMs6Xv1ND%2B41FSMUSEQDCEW3bY%2F6U8koJ7gnMQ4pRjxqNu1beTMvmIxWG2S2in%2FzJ5uiEApwrC6MvPJxG07BNKKFJu8o3P2UeSyZro9hFcdBQG7aTgehj1mg6ZQH5ex5WRZrS4L%2B7UL7B%2BHDtoiyak2Awt%2FnMNvANnOPoeJfqz%2BzklUuIeLZy8%2BdAuyGoOZWOVfZmRNT7WNClrrL66zGsXvuZsQNMarbOEGRa0hqj%2FTinUwtjpOaFuQStKcuMgS6TtRcD%2Bm6bFU3ELkwhhjd7%2FOCrgHia19%2Bx7G6lzQ40S27u0VGl12hlviSrhnnpQfYjlQZidKca2yQBWq6%2FyCbp5EvS6DQNJrtVVnJW0JHukUPCyNJkTuKETIfu12aJiT&pp=b06c7e355ae3075caf51b7602810f49b&sc=55&ptp=1&ct=normal&cp=OfferOverlay&op=30&pt=productCart",
          },
          {
            price: "25900.38",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1205229124&ProductType=p&dat=5Kow4ZlhM2GkimDjAc3vMBgcqyZap%2BWBFTfiiXHfgLlKTS1xPbp4j1sV9GDWbjwqnJ%2F6ZLGacbJXZw6JcOF3XKGQx4Cy7JCdOxcvNgJ6ErlbcY9adET0MTF4M7NU5bZ%2FwHNxjBDGCg%2BCUU617G3Tlge%2Fo9UYxhJpLwbh17jAjBSSzD5JKW6VwtzTjiv8f%2FkButInycZ8UhZXU8TLmeXdUQXH27IcpTEmaDV%2BWcaxGBSavcOAjgBvLP6sIRr6H4p2CMBu3qazHjMaIfLzcXoR0epckz3SFFFMw2XLGyok2uwqW3X44ekKOw6YKQWffFmoxsguk%2B2XHJAMXtfZna5s35KxaInFNHtGj%2FZ8Ke2i4d9KBGaSDZc0zcUFBzqzrpqpr9hdiyzvRjsCIqOnMy4fgVXfayE52%2FcoqRC0nhvHDAbQLUMtVQrmeVfI34pikGWM&pp=558f34ce45c1253cccdcee382d4e3776&sc=55&ptp=1&ct=normal&cp=OfferOverlay&op=31&pt=productCart",
          },
          {
            price: "25970",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1135856553&ProductType=p&dat=PhE3zZAIzEmr8T2MysiW%2FodH82NxLGKYU8cFT1j%2FZLNH0684d4W%2FQbdnUHjpWjhLGbbCkcmHPnMaEybf5ecD8UmwZqttTKM%2FW091%2B%2F1URTy088LjKTl%2B4OaHcwjkxkoSd7k%2FqNoLgpAsLXzAwvE3gtmxH849IGepeYXh10AnyrgI8WHX6W68xP2zHy7%2B%2FB3q8zguWYyEvTkxo9xvt3%2FPX3R0i%2FyWfXBnC4UVF%2FJPqXCnhvJsQ3DZsUlc87JdFTZj2ljGxTqj%2FYd6MFQqbUregUokTqIGxTOMSr8CEs%2BvJaWFjay12rNxjtAh9PW1U62XfvDMHHQ0hNoRs%2BQI6OtdQ1VmDbXLHe%2BAwicVNKQQjqfqRErkMTAKNW%2FibsA1hXuWXbFXc0LSadU8sKNtAXlqin1kgs8E%2BYJuC68BJ0sNH9toqGs9yO2I0dY7fmi9u22h&pp=ae77fdaab126f6465fbca29e0c28f15c&sc=55&ptp=1&ct=normal&cp=OfferOverlay&op=32&pt=productCart",
          },
          {
            price: "25989",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=935310126&ProductType=p&dat=079ukZNMbUGuYZec7CbTjbABfr2bdFctGySee6o2fVTxwm7GTsqKbraflMJBzEqQPKViZp6I7C6CemFrPZtxans4rkOWlj8gqHZmMEiDlT%2BbYD0VCNAwRmm2nygh8U21Jz%2FZ%2Fu2btIEu4dzuFnzgvKUCbXEpe4qimiwTIHn76R1Ew6uNxAwVA3NhZ2kLu9qw8TgjAixGUccBshzVKR8%2BJhSM0MSj%2FRimnzs5l%2F3oXNcqp3YrrpAU69plpFpzLz3HD9WBFjhFK4gNseyssndKfla3jx1z4bvSk9LQUYsFxo1hPNjumbPRhrpDcOewQWqN%2FrspxXIwXBPytFdjct0g2O4tFX6KvmIfxMwVvkUPeGxY1SK%2FBOwtMBUDpTgnHX53j3tWkhsS%2BW%2FaFGVBEPL2LuYdfJRmZrddVxOIsvxNJRp9NayGpLIjVkivN%2BeYS06m&pp=18f1434b6efb9ef6341bd7c3f1fdd6ea&sc=55&ptp=1&ct=normal&cp=OfferOverlay&op=33&pt=productCart",
          },
          {
            price: "25990",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1249435285&ProductType=p&dat=tDpWFy5cMq0%2BxuedOdJPQMvX%2BY8nehEKjY8%2FW3bMFxuwemOS8XVLrYBTLkkMmbzEu%2BCg56kWozMaM7yqtTXKH117nJbD29TRtBdhyA1XhHPqi2IWIQZkOWHHc6T2W7R3fuf1uFyPu0QmoUce9OBqQ5rfbxb2W3n2Kp5GaKlxUiq25e4sT72PhZgXKUbeMP8kCP9JiqyIJPx0aeiOIFECKdcOsMMX625bzbnSW51VPnepKFGdecomcJW5DzERDWxlfxipuru%2Bbo87v4iNdNKpgIquuycKRAI2%2Fbad5xWbfvfpDaJfgVXgRLjK1%2B3%2BwP6UghxjCZ%2FPgvzFAS8xmV2NPLwynLq8OzD8MJffc%2BwraGvw8ovaLLeA8w4hvYu%2F%2Fc47SNX7SiD6q50QiJBqR2Rt5%2FHu%2FSirYoHF7qDK94hJmTQaMBaUToXS2ccF%2F2svqjDI&pp=df7168ae45143a97e69c0cb87278d99f&sc=55&ptp=1&ct=normal&cp=OfferOverlay&op=34&pt=productCart",
          },
          {
            price: "25999",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1215734452&ProductType=p&dat=vsnX54%2BTmpEHBRBqcOKFSgzs41XJ3WW5XcfdUB3vSrJ4xPqMiR%2FV8IbLnBoy4GKNymt7bBs6pOSz%2FdoYckzhQxI7V5NXuqUdb7Ccr7mhcc80QZ5s1485SJBE%2BuayknP7wMbtbzS%2BDq0rgfyAlQ3JFMuuX7yvfqKHLZHE0pv5GLqDoRu6u%2BvkkKce%2B%2FMEp1TVzMQHpcqoYTCRmrnRRY8KTFKT3Ot3lYdctN0k2r4x%2F0bpEoH4bb0AZay%2FvQzOOoNV28576sTsk%2Fkz%2FOLm5f5ueIW9M4inIEki%2FatFsbVAy5%2BRcOlOW7lXPe5ijMOc1Q9aoMIxZLulxJp2tr2U%2BCTwGu1HK3AWKvx%2FYApKtSaNK7KB1l9aSp%2BuP1J00Dwwp3Esi1AiOZakGG4mko4HvcpslAs81QEqXQPLEIPySzocdSJRvdGiosXiaZ1wa90Jq6JB&pp=13538cf060f82e2323c58e4a516799f9&sc=55&ptp=1&ct=normal&cp=OfferOverlay&op=35&pt=productCart",
          },
          {
            price: "26226",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1215734458&ProductType=p&dat=zYAWOzlpvJ4wWjNlNm5KvxfL9iUoXwmdf%2Bv55fVep4Iu54m6omazVEFKYM6kQ7hv3a6hAf13ijfhao1HMBv8s6ndStzGbqgqrTQOMgv%2B0xTqtAWFClXXiK2t1Y8S%2FKV%2FCsnkvIHBifaYSAhe3Y1xOY2qJJeaA4YK9HYOs%2F7ixdfgUdQxSweBuynJBGJ0YrxkWt0nPV6j9B6HGelpVq2Th83wAHp%2FzHVHrnqE2aOCytSnJpUg1JXpXQ1vtltPSu8XMkvb4E8u9OD0qjP%2BUV6vcD9%2FHWPBPz%2BDSqnpG2083h6SL%2FOABpu4C%2Bzo62HHBmUWQoUyW2AY4uRCeYJqjBhuo9OrmXD1avSy4vmb%2BnmyHD7o4Pri9w4%2BtTAWNWhBmpFjeagUcQJ2LAzkcUbcz2RBGzdLkKIB4zIxzyQfCGXKNGHCKCVu7x3ljCFYKszogJ5Z&pp=18444a866a10af9c9d3ffe9cb404d048&sc=55&ptp=1&ct=normal&cp=OfferOverlay&op=36&pt=productCart",
          },
          {
            price: "26300",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1223307730&ProductType=p&dat=kXp8TRpC56Xd9dJX9mEXjEaRSENPdWp5LQabFVohdXK0GOEFaFsTZ0Det8OSFTzEZwHWTSsgslBZdy0vxef9xQHYX0aOqvU8tQHZCnW5eJIJ1x2Jdu1NSMV8OzCRjaW6nuuBhVdrj9mWVxwOc0BubY%2Boc8yLstOW4%2BxNKz7w3XDLUmO3HX89oFCCaevdoVaQtGGTOdwOhctaXk0TacV%2B0IIbjluBgSpl3sw368tJyWneKSM3cfGHfDtxx3HTvDKh9MFnYKblR9WNw9rZDIDgbFzFZopRrckuRst397cTeq5lHht6%2FAd4%2FdzBwNfGEBN%2Fg81iW770veCBkSWjLOgF3%2FRfUkozTjqvrJRzd5wA6WE905PgeY3JqeCt6oG6eJGsi18X%2BKvqQ6EJDTvlGfurA5%2FdfmhCJF3F6GHClGXAnU%2BEgz8V%2FsnIPpxO%2BnNBxqEG&pp=98522e8c66fc2d75c491f68141277348&sc=55&ptp=1&ct=normal&cp=OfferOverlay&op=37&pt=productCart",
          },
          {
            price: "26490",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1249969090&ProductType=p&dat=9SnizeLN7VXQ6ekONqCE%2FeLl%2BH2CNdbqak3xeQOXOWhImxDuk0aGdZVcQ6INzUbff3Y3ev%2ByCAcGR0qBbFq1G5I5O78ToTdfO9NQf974T%2FGitpalyvs2ltnX8fKbF0VMIwJTgxHTxw22ac9qJIar1yIYbcHzcmYsRIgvHn5ewwc9To%2B0RdygoCV%2Fl%2BiuYnmiYt3MPcncFnYpe0wIJChGL5k5LfUHwC6rRZIxnAX%2B00Mf0QOY9GrW3xas5PIAXCBmj4pOuh5SBr9g0PYwfvOXHEcS%2Fi3OvpbYQSSvriT6M%2FeU8bkK%2BSoF8X2IfKVTVzPMHmHsumzEgQMi0tQeQ9j%2FwrNECCD3sxQqTxoLlu%2BdTjGtMdF%2FWWPLjDzjwxjjpXK3WAlQbfxKv9DhFL2eXeXhq1CgxXZBhpzvXEirjwligJQB%2B0ry96vya0%2B1EAo%2FYYab&pp=26733b250e4401a8e55d19fe9b01a26a&sc=55&ptp=1&ct=normal&cp=OfferOverlay&op=38&pt=productCart",
          },
          {
            price: "26999",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1219737532&ProductType=p&dat=EKwrDG1ftH0AUHwLL%2BRgZBSZtaKj8Vv399EvqpRgKHU%2FBPMraaxgPn1oL8TnxFjziO6mBDCBF1kls3BpaorsoCZVCnZa9S%2Bj5jIy13rFKRWu4uGi3lLC9XpFNImx6ji0Fm%2Fct2wl0WaN3V%2FEs%2Fw5cCGz24SKxEXYtHgbRJHpA2%2B1o3y4MvoN%2FB8wYbmJnkr5WNUtl%2BPTdXpbfnJjoua4KxjtfBqjD0bGJw1VpjpuMURXqT73Nhe%2FZVJ4S24Jb9TKtWZ8x0a%2BHYqfT0gUGC4MPjm74EH1UaYMHPc%2Bik%2FyUb8DqShU6kAETJ3%2BHMkZ%2BbNhFnYphcK5BzwBnjCbTOZH%2F1OUwK46RmSKzoH1eWU0JeQMLjw2pm8BCxvamtf5B7Sw%2BwstLnuHdjgDi%2BGba6xnhfRQMB85%2FMjsHHNFvCkqW64uCXFxqGGo8NX%2BeAMRPLI1&pp=f95ee4dc9a091334752b8498286cbb3d&sc=55&ptp=1&ct=normal&cp=OfferOverlay&op=39&pt=productCart",
          },
          {
            price: "26999",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1221812809&ProductType=p&dat=aG2eseoSvc9MFxHv0alKmUF%2BWm6WDXHdLJVyX75MXgXHaVkN%2FiJ67cs4iGzOynD7Lb9Gb4zhVjmHfTyW1TPbWL0rYL%2FtBijoVk9hpdwRafMw2G%2BmI9KXjIJ17pZzI%2FNVir0y4Kdt1l%2B%2BwGUdpWFC7Rcphme1U2Ddf1Q%2FFUBAUtjVSUxzkqx%2BU6noMRig6NQYUmw6Z1xmnRhuGKtEL1JfhQyO2BDtugjmfJcPw7644Byh%2Bnlwlr2s%2BbnRCMJEHWM69fBw1F2wIwhln5C1rDuBPQ5D7iY7X0IHhEDK1KoFzEEoW98n1dbs9IFQeLPlmJ4eg8fdrQw3uGEWDC2xNGjNwxkdrxDm68SU6ogBecIbeIMqI2mMLtt43JlOPKsI3REMg6doKdo4Bm0BV0%2BaH9zqkzPKOceV4%2B2XU%2BRJly0eNhhHtSdsSVEWclgMDAX53wBv&pp=3e08cccb1184aad7ed53d89d140d217f&sc=55&ptp=1&ct=normal&cp=OfferOverlay&op=40&pt=productCart",
          },
          {
            price: "26999.01",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1232148061&ProductType=p&dat=rlD4wDZWnlpRS4Udn4EKPygptSBUKv%2BqsYPbQuaz3mmC5tkXjeVMIBJaIRuHsXz4YCkd1undvdHd0v8iwsn4TVjbsNhrLhRZVMUnjCOicWOtNJ1JiLqVTdxTJGWpEE5N%2FQEbPAyaB3khmXU2MPfFfnKV6027NGRIgCMm4u%2BpW4FART5lzoBfsj6j38MHqqM3E4b1CNjprzlQbA0tWQom6fdCB7LyDeIh7PNiydcaJRNbH808jfP%2FqWcwDJpaGmsu%2FhT2ygxYhedKkSUKRE9wvLrhs5xbYJXKADl8uqexdKDfyUvd97vs0306ix%2FBi0KTQ9fo0nh2rg2Ps6k9heg0hUJw5yCTElI%2BYn07aF4zp8NCbdhtPzY59%2BAaW%2BWkhqsNsc%2Bf1alOP8vahn9%2FnnAtbtJruBNVONtwlH1%2BvOMXL5e0QCGItw0u7e%2FOApA5UsQY&pp=7fbccf5bd896fe67cf960b705faaaf5f&sc=55&ptp=1&ct=normal&cp=OfferOverlay&op=41&pt=productCart",
          },
          {
            price: "27642",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1221207622&ProductType=p&dat=kkDby145Eh2GokxcSxBvPBboRnu%2FWLHV8Qk5%2Fr6aFnEzAADk%2BW7CuQNZiP1OfurCdjpHHlZXBPuD%2FWFwnYi1s10seh5nIiVhdvLuIpkoxQmITOYrKlSn12dF9f6qQ9tXZ7%2FOA%2F3OB7EFI6ULfDAceM7uIr%2BLvaXUyE2rANnKGos8dnTqmMCak5rQaBDyrW6CD84q5oALp9Vgd2CLXC%2BBC2J642zGTaJmuGyWeRrrZyd8gow8O49O3J3%2BcmYv6W1fxH%2BVMlwUNtieWZrHpCCcoYAlfcU%2F29OAR%2BLMJlWx0TzhRciLpzGq3cD3kzThBzaD8x492zC%2FIGduxvs9t3f5vlj7S94qxLdYavW0P7bLCoti5sT1HHc5iieTIZyX0MCftkXgvblz7BeSXWX%2BGwrx4FdANLqUFMNH%2FtsjwIWKKhnCz9WxOZYYwCFGPW6QKKns&pp=14f948e1559a9fe6b043b68cb32eb245&sc=55&ptp=1&ct=normal&cp=OfferOverlay&op=42&pt=productCart",
          },
          {
            price: "27890",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=945842376&ProductType=p&dat=noQIg2kwouYDDGQ1yPralpgkjzqLybN53LMaG7bwSkiDMwqZbiTjmeihjSN%2BX2xTlZ%2FHEZgizHrwY%2BoU6diNGITgzHvd0T7dHIUqOgrIPK65BI6ituRty3N627IUr4O1XPNJHwA6G3cK6JMHWPKkm681ukSrOogfFig4E5Ls4ZOXn0U9F0mxqWy7WCUStv1a9zbkvaQPysD5xbnzRVX%2FauIE0RKAYKtoJfu8S34BtiMls6Kzvw4t38cAO0%2FoVTAEy1JCacs4MVNJFeR%2FR0QgKP26096LRNinplXfN5qk1%2FHkz%2BmV9R1owhZOEBuKv9bRVm1CCGZcS%2FDZuZqhMhQ6xWMyaocCEP51IAhN%2BiG8ASdIOeNAPudY8wJz%2FApeRyI8a2qvcY77e28fVIAnCEjhNnWWyG55dl8WYpnqxEPCqPNnkJDBYfoO%2FtnDCnb5QNtP&pp=0722700c8e4cc9d981a252865a831fbe&sc=55&ptp=1&ct=normal&cp=OfferOverlay&op=43&pt=productCart",
          },
          {
            price: "27899",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1114409664&ProductType=p&dat=sJbTuShVvscKS4SrZtyPKVkpkmHMteoweDVbklz%2FyCphQNBklTOmjxdCB6KGAXBr7EQWnTo1wXkiYEwCZCeSNGmSUQ2ZDkXdj5VQeTCEhIsVMIIEioJEkdDK%2B3lpQsKYK8htMgUuSXV2Wn6g6rqOej700g5IgSQMumB4mdWJuOyZ3zXMqogRvFYkwgVugwXE8CpbXWM9ZcLRDFdWebGU9jN4DOndOvyXNczYPuquoEg08L9qnW8Tk4lHGfUWtdjdXyBrve42CsEmieA01ENGvV9metqyohzRkU66S%2BF5fantQf1PFgMpqs%2FRXMxkaOKd06ztqY4WIGDr7pH8Br6%2BQfGtBUi4bw3LIVViRR1szGqElgNOg%2BZvBn%2BoI0BLjdMKiAaWxH%2BnTbSXqudrR18owDLHR5enfMFl15A8Tz5bzdOh4W%2B02BcFV%2BXgOaoIxhno&pp=a5657400ce764305598bda7ee6cd23bd&sc=55&ptp=1&ct=normal&cp=OfferOverlay&op=44&pt=productCart",
          },
          {
            price: "28000",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1223308489&ProductType=p&dat=3jtZvW02Ztn%2F511QrF1IXQrdUSNpDsbR7vQIm7VOI1QjjqC9lszJ5CBGU6sM9BZj0C3R1vwqCNCtiQS2anyCY0CT7p5WBYNWb7Q49mZOnWk0axoP%2BzLi4XQYWLx86j9GccjHbPGSjNW1xH0ls8FHlU8aYk0n9SJIEvr6GSH9tq7aXG6ulLXRe9RRghGDlgXtd8NgyGEWhn46veGcGLLc7tVnTkLloy1wtn36iA7xzWihf6F%2BQvw7QIet%2BEdFEA0NYmr6zsScRUQ%2FHR3Z%2BkN2YHosI0fbohgm8KPd8W%2FItk6adX54BvP4rBNFuRZAOm6EU2xpmrDr7WEIJ0P87dBgqXiv3nKsPkIxC%2BZgmxo3Azs4PBA0IeVfWFpnKJifsF8rMPfG%2FbICpjFRtiq1HGMcYmyU2d%2F8psrjPN6LP2CN%2BXk%3D&pp=1c0edd608710ccc9a9058ce102584a0f&sc=55&ptp=1&ct=normal&cp=OfferOverlay&op=45&pt=productCart",
          },
          {
            price: "28890",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1179797584&ProductType=p&dat=qx0AksWJ9azVSEy9FzvXkgGLz%2BrQQWPvq93mNi82q450QHdXuVDLemnQ%2B5%2Fk2clnQqQQfEi0eonummMikGnsqRRY6wZ0eJkFNnY7YJe1mXU11FLn1PCwsbb3G%2FVfmVz5VId4RPnaWxvlxLTp58y1kcLOC87Qkp2xCNom%2Fi3TpQ2M7ImS52ZfK31yRyduvxJULNQF66wjY18jM6mDza%2B2gKs4Wfj%2FzfmHeEmxCiEM3L56%2BssKIBmEZIh3PwbnOxhsaHUY7%2BUaQHxkdJWb1c7Rk9TMmJz3a%2FTEv7MjmpuiEre3MQWJfWAHnUSiIGFJdqR3NH9JQaI%2BrlN6Ne8oCVfOYbaNGB3Xz6bj4BraGhV61P8zqmjFIZl4Xx3JitjzJ1WAKSzZXhW32JAk1n1fXs8%2FtO2PmFnYdVBdy%2B%2FKhTLRrv351WhoBIvd290Luso3Jt4t&pp=1f1471fcfdd7729dffe4cdad908b6581&sc=55&ptp=1&ct=normal&cp=OfferOverlay&op=46&pt=productCart",
          },
          {
            price: "28990",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1253928307&ProductType=p&dat=3wJ09Td6pCJtfDW%2FXT7Sb5Zn5YjEGx%2FZ6tQ3WhZ0nUQAOiYcgHHUuz%2FW6PdBtlnqHWAXZUkqwhWFAnc%2F0NwYn1%2BmBBRZBOIfGGDtk9Xp6rzEk7cPIWHtD%2FKjM6RbDlrJPCp64ARY%2BMUbi4fKK9no8YoPg%2Fe4HP%2BaobmBUtWcAfmDFKx6TupX2aqrvvJ%2FXvNWdk2oHEuXlwhzmCJtzJZkaXGLb6bHff%2BDS%2FoYpMpEkJKuBw5zxsmeSzvsOuywYAdrfCDp5HJC27efi2ngGh9AT7apN6ln2FBrbaIkI3GauthEt3RIAAq9FX2MSoqvQhzzc5NHEdL0VdFjaAyoz%2BDcko1Oxt2pkro%2FANumVTCP5LSQM4RIRjHn6NXM9wy%2FhXK0KQLVmCwJd33NGy9pcHPX5wKyZNwtx3H8I8jBeNY34zSCbTQ8Btb1o5VS0VO0YVIj&pp=d3a64d6ee497764c92f35fef45ebd3c3&sc=55&ptp=1&ct=normal&cp=OfferOverlay&op=47&pt=productCart",
          },
          {
            price: "29190",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=792600267&ProductType=p&dat=D6E4JDIONnyM7dvzVbfo%2F25rDQbX7TK6I56Ksk34G2EB9wcEmzLSe6jyBsshqSQAX0P2AsIDbPWud3MM7nhVqfDeFTYV4zTyMkxk%2FdFbRHRCRf5pvyHvgoUZgSk3FRZfyQ495LChjZ4W5afZoUZ%2FW5XLC15y9vKQzQpNpP3q3CGfZVvu4%2F2ldGHQYkBh27FH8C4tZB2KwI5WOYhdShm8PHSVE26AiR9m0l3OxdJjOpBp5F9sVZeOZzWf8J7QwNcfQLanLbUMGxqcPmmONQX%2BZyEVO32GuDL51PoHXlnmO%2BFBcTp9R6M%2FmOam9f%2BAe7rMtT3Ixc1qPx0P82V6c1U%2F1f11Cx0YK4hKxScQ6TU07kY9%2BbS0kyAYJlll%2FQHoC2YwOeP2CfGK78jZ0fkk1FE0KFp5PaDZO6fF6i7dcwpg21YWr5SGrzKMWMWhZwuJ9Hs0&pp=bb12f4e5b2c838c8ae00cf6db8b68767&sc=55&ptp=1&ct=normal&cp=OfferOverlay&op=48&pt=productCart",
          },
          {
            price: "29990",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1209316588&ProductType=p&dat=U2vnBKwuESVEvxrRHL%2BM2kCxUoMWVUj9Kee4c0eOJG3v4gWDs10FZdkSAA1hJrm97pQzay1E8EgfjD%2FlMgH4bQKB0lkiWn4e3lBfkxnA%2BUYdwinHpet7K%2B6xACZ5rH878gRN0KaABOoICMX%2Bh%2B1DBA7aT8y2OaeyCLU5k%2BC4mtc7eHm5SyHymW9DL5bOGmVSw2c66jcx7b5W45l2fl%2B6l%2Fu0zuXGSyjNPmMJS6Tj9y7nEQtoFgcbxog0Y5kCiG8CFaruQcac1F6oXUHsz5KK6c1w3Cz1ld8gRJ7oWje2jKL6N5b%2Fhsu2tulahQEPDLjYCRvC4XLloJfISlJ1FAQOGx9q1ir9LZDqlqHWJsUfiH3Wc6v8JHqSpYKPEBEI9kCRzcKGxfEC8%2FgZN2NQ%2BMJvVzlO%2FArfjhlVTqXEKNudxRSayJP5IgIv5qGt0BkSWxXs&pp=b5e4d6206042ceb8f31c3cfcd76adf87&sc=55&ptp=1&ct=normal&cp=OfferOverlay&op=49&pt=productCart",
          },
          {
            price: "30267",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1252626430&ProductType=p&dat=xrfdE36pvo7ORk8An4lFdGnOaQc9gTpNi4bfi54WEwGDeMepIrMaxCPJ1zFEqszOvyATh6Mq9vkrqB1v3qLX6hObJl2T%2FSQquxOeL7UbUMGDsHZqcgCxMSSzan8zcnpEZnv3TXg8W51fSm8RQKXrP1NJed1JKV5O457OKf%2F0FIHbJFQrSx7MwsmljW25ZMdWaTNo656PoOL9jTVqwLkSOE1M0VI%2Fg8J43wsD4KA%2BDmOfSPy02wImcr5Tcw6O7Bv4RKvxIVoBtfAriN4u8lnfXeyzLtCDL%2FBA%2FK3NzX0vkbiTt30tXtl%2BtEADjRzSs72mkGUSk25qXaXFgxpQhD0hOV01b6OdfJ6VyOVC%2F4%2BSOsyDTud9eTgWvjFKQaNHpd7st8XBoYGxHcNXTjR%2BZDsFP1t3oNNYC0zJ8KlMcdIDWTPAPWOhhb8m4d8o8SmHDTfb&pp=0e8f65aef9bab9a3acebc611131dc53f&sc=55&ptp=1&ct=normal&cp=OfferOverlay&op=50&pt=productCart",
          },
          {
            price: "30920",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1252883215&ProductType=p&dat=0606rG7DwUoD%2Fpv5wEKYDQSUoqhpzwZbvazH8n2SJLdax1UP4KF5we%2F5YZVSKTNEiUYE78uOsDEWV8V4%2B4HUp6lPrC4m0vW8s78fDsPGZruExOv61K%2BCg2S8WQOVsC2U2TB9UoLuzHJOP7Pw%2BghhiK58fIVaV48rxZLYTH0qIyRdNI2xGfF4LVLeA7zYMQkSo6bW2aEsERBXdbch1tZe%2FEjI%2Ft5ZPx7PvHtcYElcX%2FLI5yd4mJl9BYIdqXjNmCIY3B7LEb1iljPLBTt2ZS9HeXibXQdd%2FmJwJk8bWYh54n3McDlc6yH3A8AcQOjCy3wEkKUwz05g1COB6gCxiaA7I6lmcmlSsRZE0%2FKvnfDMYkf7esXTFGNtorEkq0Q43UMCH1hIXdt%2B2y2kMwDYYXSYBZ1BzfDpi3h1F5s1r5vUkHniNXj9Ewvqey5SYENLN%2Bfs&pp=131207521e67a11726600b77d717166e&sc=55&ptp=1&ct=normal&cp=OfferOverlay&op=51&pt=productCart",
          },
          {
            price: "31090",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1244633518&ProductType=p&dat=k1TVmitL%2BTZOMhiyP7nsZ70BNcw0GDyADlX0Qs%2BUuvEKxi1PM%2FN4YNfX6YegcolBzNaiR17zYzVRjl%2FazEXXhPhXkdZocQ3ObnuABYVHj%2BSLPsMTNptqm6SDMyhJUKdmPSWxX99VEnfp9ouYonjfNYfdF7MSCr%2FrGaTFPZGE%2FbpQ23iuQ5lFFriD7JCmaUwnrKppjQDN6O5TpU0XWKgPveh3ExlEEAO7A4elgbSwl2kIwEDD%2FDHzdUXKA6GLak5Q7LHRXeBayJzQ0w0Xb8zJLCs3drhXlRVg4dudjty2bFXhrhb377NUhU9ADjDLT%2B98opZQLiVfs3cJvwrr0DwXNyWEew4MQDPwsxyTnShRp3DRCIyXhGlqLy613ORM2AN7B9Tm6Mvt5hmk9SJs6ASUHhdhkU2j33qTVyNQurRku6E%3D&pp=53285c493d5f110880eb763ad08c6a2c&sc=55&ptp=1&ct=normal&cp=OfferOverlay&op=52&pt=productCart",
          },
          {
            price: "24110",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=818814819&ProductType=p&dat=KpK4GEMb456%2B5P%2FIHdIekjoPp8SH5gTIUjvw%2BrzDuFVnvqoFIi3G7u5pOrSf4Ys1%2FGzpCB8ANyqLKdnixxZkmNrSjDHZWQvuqhhZWilcu2HDmzVVf%2BUJydCXmkAxkGnXCKR5EnQXJ6B%2FvTf2R5TEnM7BHQsSjaUTXpivN7xHtIndwZ1I%2BL%2BJnIIWCYWU24RVdUVRO76mbR227ZGHABrz%2BcK02AretnXLxBQ%2FiMXPcFqu9lUJQzZ0f4gTf4bYTy%2FueBeEG%2FTk44ml60UEc2rijOIq0AvQ%2BW7Mul8SBCJ2r5SH2e9V5Zhl67BME%2B6s5dicsuTYuxvh4pw5wUwCVCWcuZ39fMcmXSgOQO1I5qJM86Q23zkftKBdfjsGV9ncd6ViPgxIpKO%2BEj1qB6i1Yi%2BOSnClZyzrWi2NidpQpwVfYwV1VWZfzhK6KgZbqsheEA3q&pp=1584f1df194dc601a1d778f474757dfb&sc=55&ptp=1&ct=foreign&cp=OfferOverlay&op=53&pt=productCart",
          },
          {
            price: "28220",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=786886809&ProductType=p&dat=3HhhBbkW4rPzC%2BrG5JDsd4VkKcW4EqNyfwexa7HIClkkn4AJaZJgeik9Pv3B2A9cnXpxxdKNiKewg87a3nOh1NMHYekbn1H73KQe5kp%2BlgcZ%2BzKiLKl%2FqhAvKJJV7xCBJA2aHnnw6ai2dUaz6ldW3g5TFYYobC7yJY7cxeeqeGGA88IwyUZysWot%2BEjL4T8xRG%2B%2FN3Wy7pTh0NpyKa%2Fzezv5wrzdhjZpQP4NTT77iApb6gXHssxK0V3OWGUF6hn0A8g9e3tubFCOGW%2BK1eF5QwCiltU2pQJQh9y0%2Bq%2FMwowueqNPWi6Io4S%2Bg6nT%2FH9cfBXhTajlqGd24J0wOhk6KaSMKgm8yk0mUdOacZFOVWPRXMDw4z5VKp34teYjhPyvQwYLOWlN4XmOrjDc2o3oCNC47C4af3AeJtutBAo8Ma827yKZwrforCLL9mRwOL%2Bz&pp=435c28981c3ef0b39aa35a8cff8b9e87&sc=55&ptp=1&ct=foreign&cp=OfferOverlay&op=54&pt=productCart",
          },
          {
            price: "26990",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1237229560&ProductType=p&dat=BsaW1X9VblFVV%2FJF2Jxodc03br9qrGSS5IU9tq1%2FPXccpHggCwkz%2FwSqEHHAp9LuiJE95KT1HeXoSG2ujLq5YwwiGXRu7j4F8XvnzX0vniQYnxoLA6ftz7FBH%2Fox%2FF8FHMYDfUGZFYukVykClcOqB6zvtOtmINbXUKoPf%2FU37mO6LbHPwds%2Fddaf1Hwxc%2BIAifC4uG64AF2G81WvIUiVPIhEyfO%2F7bfm2GuBD36mGY8nn4AU6b4r6hlxRbjh6pnXWyOnKeWvBhp4e5sgPuBE7EvtLu2puRlfAXo9KFHl3l6E8zd%2BsYV84YV%2BQd%2BQlJ20zEDCl6UUPb6yZVieN4vVCvcxU1mcnXNizho4OmxP%2F1CZOxY6dO5i9j%2FUF%2FotrwaS4vDorOft7797J4fdj02JLs0%2FP1yBeuSfy3VPcZb85YO74gOTU5hp%2FglgmP8QBBBJ&pp=14cac6b0c06d6ebfd500c34e8fa529c0&sc=55&ptp=1&ct=normal&cp=OfferOverlay&op=55&pt=productCart",
          },
        ],
        picture_url: "https://p1.akcdn.net/thumb/750347118.sony-playstation-5-dualsense.jpg",
      },
      {
        item: "Sony PLAYSTATION 5",
        prices: [
          {
            price: "221990",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1007265054&ProductType=p&dat=FjfLU45TAWGRH%2F9k9c%2Fzic4pdF3VSNMjLTb%2F0SREwnqwH%2FRA1GU%2F2UXmZz8fjeF60n5bmtsWApCS%2FH046Nn3561gppqD1CgR%2Fc3NoeX0HQE0fxzXqFkx2TOsO2JfvYs4kXj%2FyIceB6t7ci%2B0ESR8lfVjQH%2BKvja1XbOmVq0%2F20Wzw%2FkUcRJf8vhBhxaUtEDW5DAqHW7K18w1%2Folmv9JCRaElQe%2FqA53l0CBYEfpOr%2BV8GR1l7OQGDDdk0WgnvGfh5d6orJrp%2BUGxDLI5I2t0UNObSt6bVNamj6WRe%2Fzqt%2BMwaUe3HkJGO0ZM9Yv5aypT89WUoLo0sPOe2LILBuUCNi%2FD26DCK4VNp5GSHX%2FnAEPIGuOk8W3q5OTvCEAFRclQlGuvj5WuCDnQwxNxJPR%2F42l29EKc9fpyBxNPIM9H1eaRj4xNIrrhDou3HW%2BuvpUo&pp=80d622fe1ce0e3addd8f464beaf846a0&sc=11&ptp=2&ct=highlighted&cp=OfferOverlay&op=1&pt=product",
          },
          {
            price: "239350",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1099388874&ProductType=p&dat=PjVowngiYNmZWlZAjMAeRhPIQtRuXwwvBvgdxuJl8CZ%2FxzbMgIagl4Us6z9fHdlWJlcrCUgKNCs9te390TzcwMmJlzUskCUmlbVk9k7wp6hLFxicTjrlvC59L0e43ZfjLA%2BfBfxA%2FtpIoIpsvEGPw9Ajl138r%2B8E3oa4pMuNasOUicTA69YPmUY2su7BjmuW4guFua1QSAsUpMyglH1wGzj04%2BLS0pZhjNpxzS7ieK%2FwdezUh1vP%2BqweqprrTg5b%2FbyWGp7Cy50CgPyaq8t%2B1aGrihB43liFZkb0fssLIozEeFaGUrcO7nGorXElfO%2FB7Xtd3%2BClyJOGStZYtnwOr37qQ%2BvxceY05fnaDgVZGZJCkMzYNhCJCgjlPPHGhVBavmWrQrKIXw8la2XUQbiSnyoGh5fTJuYC0uwLMyF%2FvtA%3D&pp=c880d3370156e249a01dc781c68fa6be&sc=11&ptp=2&ct=highlighted&cp=OfferOverlay&op=2&pt=product",
          },
          {
            price: "248120",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=922769022&ProductType=p&dat=VWrAm5J8so7L%2FLlPqsi1NxsNyRUlMJAF9dVXgVPAmr%2BoLArvoW4XeIsAxEaXEQbiRnGPBIvE4bDmPEHiNbiHP857ioSHGs70%2F3s4Vg%2F6O5fkoLgqbFiY7obu%2B7p2qBL2woL1wPsdlpGpiCVTDRXyUjfYLy1zgFhse%2BVw5KDNkKp%2BjT5jSQGIbwSlGgDSJ2wCk3F2EgHSh7bn6%2Bx5d7BFdtqzMgXsK%2FcJMeGujOKWMcthOIz9HSeSClzNghvyLXWMIbwSAAyo76UaZjx0kRHw4jvpKwDcGx8sLBtPrP2ue%2FM5iBQc6MD2i4wDw3Bn1%2FKw%2BDjJysc8WRugwsqHGGlYFqSGI%2BzZESK1UgTAjODsv7gmsgMwgpWcpQIkwwgK93nG1kTCB3bZjQK%2BcMCU8%2FsqyySU7HyXhcAPndX0AauJNE8MOLvj%2FdNM3108Oz2tPOeF&pp=1c65422720253f19457b7816cce3194a&sc=11&ptp=2&ct=highlighted&cp=OfferOverlay&op=3&pt=product",
          },
          {
            price: "207890",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1188398440&ProductType=p&dat=m2qj%2B8jTuxAHdGZDPltN9tNN10HikTUtsz%2BQn1yUf%2BSbx7bqbzJsVeqmLOuhw289YYobVQCb1R%2F6q%2F89isVilgAj6007eSMDyPXwsUmbYGdQWXB%2BD%2BiHX1suh3j64PsI46H6%2FTVIDw9hoWFwvGw%2Fj7SBvhwFlXaRdw07uiBlltcrOjqdYe35QzdycTMJj2N7xhnaTZzlIIc1pDPHv5bNVQFOS6AD%2B28mgYsLIq7Xayb5k%2F6XjKEKK%2F%2B2r1n1nu%2BNsEXSjeNbKwTMnV0uagsU%2BEook6gyTiJoYKO4Pp2fZSoPYjOGioCApJIGn2vRmAyOIG3ZWhkpbSVJbDiF2s5RdATMwzmxDFxfw3B64CV2oqXnqeGrfpCm%2F2%2B8J1iyJ8tQVhVS7e6buLQEAnOuc1Wex9It4Kz0QxZBC64hO8aED%2Bbkli7bnrIbvLWxHmPx2gYe&pp=b89ca583344964f3b6fc4184aabd98b3&sc=11&ptp=1&ct=normal&cp=OfferOverlay&op=4&pt=product",
          },
          {
            price: "207900",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1251346828&ProductType=p&dat=yoDNBCCXTL7OZ9uwzkB28C6v33vvRvy7cgyjq8KnGyPCRfYpi70wPiJhbul6xf8X376fC%2F8YVFSfMfC9006twWV7iqOUV2r5ulIQPfAHzpJGCaezvgsZJjSEAWeGnVv4O0zu1XF0FfuHZJCH3tSl6ynuLkRuOCNNqbMuyHXgYgE6C4ik4WZcmSm49E9r%2BbezTM%2BVI8GJNnRFMGeRvQll0ikhm2hJoH5uh76d29wlgLs%2BlYwpf%2BFLeBsmtYQMOhfnRuDGU4TMINhuDzWg42qMKhNjLHPWGcVHWQvRLLZNNVxtk0v3YXKm6NmWMsPR1Holm8UtcLetcPTPkvI1xUWwdv%2BPajpAjBn5fIAYJy93Ul1jsufZMKoYrWNsBl1O14x4AtEqAFnNVMDkEtdajWHVlH8n2UlThcX3JTwh76sjF1QmilkMZmCyG64%2BHaFYz%2FsF&pp=36de2ac66b9c348f70536f3318663315&sc=11&ptp=1&ct=normal&cp=OfferOverlay&op=5&pt=product",
          },
          {
            price: "209000",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1246943422&ProductType=p&dat=%2BvSRA%2BzDISWiJblJHZmvDg%2BBDiDhARgTZcbB6oTD3MuO5FGOAoRlZvshxqNmO4UXjzyNDhngG2MdlZ9DkdetxAcfJGrQxcQY8cTTOL9pj1jhJtYI9uUSup1kBXP4kfVKchWC87ol5cg8iYi8qMB92LA0utkV%2F3knFWq4E3H2iBJkeU8yrVYEr8VcQcRUIexRrmVk3TxWlepY0ZZdpP8%2B0x4hMVGCnsk5eO76zrR6Inrk9sFSOFZBLtpRMpAzKJ%2B9FiKhiO3PhN0e6TgZ%2FUywybr%2FMBqmB2%2Fv9u8wFdYuH%2BisVox7wCnTLt481%2FOgpo9qR2M0OOfA386iCcEd58%2FVHCdwLCTW6YyJUwcWpe2o329zVb4kmk6wj15B3nbiTE7xAa%2FAmm45n8QJM710jxrRwYn04jiImBhVUDELOybeAKdGYzoPSXCj4R%2B1COFJr8OE&pp=71a708c2709e021c9fa11af2c4630cbd&sc=11&ptp=1&ct=normal&cp=OfferOverlay&op=6&pt=product",
          },
          {
            price: "214990",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1243489576&ProductType=p&dat=eII5%2BybAzlJG%2FO%2BKYC2e5FNRXtojEfvWZxqBbqDKHBa3X%2FmsA2DE05rMTqGtJvo%2FxfbWxJe15SGG%2BrJle04%2BjsjNJsb0y4%2BoaSyXmbcpHZgPRAmGkcNNcr9a2ZF0ruzNjU50%2Bhev3UWHroUig07KygNm8ZBhUW8WzBiKcvE0mXT7J%2FEHp8s51xY9XqMQB3GR34WlpPwfJEDGyUMxa3nhuUc3JtU6bqaj7qC%2Fy4hwJ6BuIpKW%2BmeonGsA62NM%2BOrwtitBB51pcu0Y6yyICgFwGa6L%2B7dFsGVk4Fqboxt1nUZnIKUXRNhJZbWpj9pGL6WLUinuN7lv6dXJt%2Frhl6y4XLNfRv6XAldYp3vslCCcEMt5vh%2BRswticpXIbqbpiXfcU7KidBxoGKxZG5lPxpwGfPuMptOmS%2F%2F9lI7Pue6v6ioO4KlRD0SpQIdRTFOxaWvd&pp=97bb65df7087678eabddd53c63418cc8&sc=11&ptp=1&ct=normal&cp=OfferOverlay&op=7&pt=product",
          },
          {
            price: "221490",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1200049594&ProductType=p&dat=S7u6A%2BpIWpbwKehl5VdWHB75FG0TGwBfG22HIt9xNxRwQQGCyuoCZmmlyNKPaV1S94J3DIQ7NY33wBzVJlt0ouixGcMmN7d3JLazQ9rSeq46A6OgY7z8vJfC7YjMARYownCSbkmOfjQsIf%2BcBh5faSvVKjHYkd905cwVBSy1%2F1HTmFk8J9g%2FRyDmk4nQEOcemEKnPniZHo5NCXyCJ5orFstb4E60s%2FvWlXlbNwrdsW8ObD%2BwWVFQVhZm5Q82M8Npu6l1fySxbtsf%2B7MJoLG2SZoCdB2Y0tdOrPh2Gfw0PIFY9CEeF8dO6ExmUiBbGf7wWoT%2BSAZp61TzOTunVs%2BxSI8jcjjFM4uFjUARima6mdb%2FQiJVVUIXe7SBTkrE315UEp2ILotF0UPMoW71Tb9RxM9P1zS%2FlJxPu2sM0IvngzzUfqegRQcQXtj5jm1osP7V&pp=83c9069faf836c72c9b0968c946a31cf&sc=11&ptp=1&ct=normal&cp=OfferOverlay&op=8&pt=product",
          },
          {
            price: "234990",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1232467543&ProductType=p&dat=6IJ26yEZRlFjSlm%2BacCGfcPR5xtJYNl4z3MZ0AoAQRWSU9j58ZY4YwzG0lxATgFMPPH%2FVDoKxG1enxx%2BYFD6FTo5ioFTw%2BY4vGxnXagoca8gYE1CR0r7f5ROvo6OuMuo7w4BdLmBGJN4iMPk2p%2Femx%2Fs5DjJe1AjmvmLqsFJ%2BGX8%2FLnPW%2BbB%2BfyOlH4L2Ba%2B5kiIYZ41G%2BLkUs888Ht8f%2BApnA3M3%2FOfERkBYYZDdGQddFKPyPKMHA9ykR8OXJL4YgjaKx3zX%2FwcQqQok5JfEqUuXPwQVY5LWozi3nEBI6VJzraACHFUjPU2G%2Fbo0ra%2B7jnt7DwZckvZwCYQ9hqKhWiJeQC%2FrPt5TsOBS22l%2BTwHr5%2BSlyHWyTkGXeP09QXJzvVB9ujandRKe%2FYBsQxwJhM9MgkhoUEYlkgCdAvxugrWodTouNzpeSis%2Bi4qkUq1&pp=6cdaa72874bedff03162711bf01af2fc&sc=11&ptp=1&ct=normal&cp=OfferOverlay&op=9&pt=product",
          },
          {
            price: "246800",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1152998403&ProductType=p&dat=gric2qn5YXYiRzXrY%2BLqvqtc4kmiA3qxVT7nuMRZu%2BOChY887lRs9YGXOakTHUE0WDJCK2nfrcjDuINXh1VF22SKmqf8MsFImzue%2Bhp44WCn0o8l1r19mSZ4UzbM4xx9PKx992S%2FiriAVR4PgiePgvF%2FWcS%2FdJGAk9mT9EVpskQfIZm2QUB2b57rVrOnlZ3vZ1%2F0hKAJNoBVGOmsh9jCSqB2VfPQnF8KgMamkkPe4sSUC3thkXqZv29ip2F%2F3mirI9QybgpMRi8FkjQ5lV2ln1BS4jmplkidPTfaX9V3mO%2F5p9KsdKrXe4IgYx59hnYdhMxOjKm1naWp0Av%2FPdn1Q5Xrx6husGfh3nwCKhi5C%2FlHEcCkpLW%2FjxjuRx0AP0gqfZw2tqBvvQPSNX7LZvu0kOvywrezIL6NglU0CQEF92kmhDcInthZcJTlRGYv%2BSbu&pp=e797320e735138dcfc85aad68e69ba61&sc=11&ptp=1&ct=normal&cp=OfferOverlay&op=10&pt=product",
          },
          {
            price: "300000",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=856702662&ProductType=p&dat=SbueHJZdiihqHmsrFf%2FkMxZ0wicTPFbj%2FR%2FgzZTxVd43ypD4NZidODlwmcRISXr0OVrYQVIuhkbZBN5Jnauw0LUDx2QGTwyBUEaJf6JDK4GkqpDRnC0ds3bW3w1tUEAJKW1NUyq7bUXpcgvvXpKWlJFb7CSvwaqxkXyBuO68DKyYScSjqqVdfMRhe2CR9ftP76BvHiycWVlep18sTEJRcZNfa2kxXfgLQhYPmaxvcQhrLPDUl4tDAbk6BZaoI4yKXTVbyDSUJrc1EnhEBaDIR5JlR9CRscDiP%2BabwtPRnNLQdaRI6f2zHBrrhnMdffBohFRPDllla4q62U1me1gtMb5KiIpqfObLRIExWeijLFUzK8rpWpp8Wvr2PjxCEhmDxcAeE3F7VOCoMb1etHsAgLk5FJFXwSDcyeI9S5CKyiImwVyqVqOiu31ZMxwWwjYp&pp=3f179e3b38161ea52ae3d1c8c1a98179&sc=11&ptp=1&ct=normal&cp=OfferOverlay&op=11&pt=product",
          },
        ],
        picture_url: "https://p1.akcdn.net/thumb/722489832.sony-playstation-5-ps5.jpg",
      },
      {
        item: "Sony PS5 Slim Digital 1TB SSD D-Chassis EU (SONYPS5-D3)",
        prices: [
          {
            price: "199990",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1231760443&ProductType=p&dat=qQc%2FcJvzTWCjAWE94Wj8cMLUtN1v2hX4Bp37D74W6TnbvV0gOBAtWdyix0uyXXECYfVead1FBBI2Aq87P0k7c0XDR%2Fh7PggY9CI0SkqDRz05R0zylF%2BR%2FcWEyVQtmjwxb3a6RM8elzKa8naJRzslCek6P38N%2FtSZ1tijculfmLAd6kjX8ZsV9aggLZRi5yoO5j9pSKvYLVcKEnRGOF0t9dNy0BRoQg4b%2BAT%2BizLNTY0kRieSS4M3nkuwyPM76aKwpwamA9uPJxijhUVOPHtGaH1pVd7U4sbUizgWlGX6BXhQW6DZAwPkMWQFSkX2QorBJ9bTSoswiBnoI1gQo%2BAonbkkE5zKsB2j6yrTGZFUxlH%2BvtUWQhrFpO1dUM9D2LGVx%2FypVKxTTJoxluMnW8UJXWc0rxqvC8pi1b7y6Ajw%2FgU%3D&pp=8578a11258d8a3e41780ef01ae8d04b7&sc=13&ptp=2&ct=highlighted&cp=OfferOverlay&op=1&pt=product",
          },
          {
            price: "184990",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1248237358&ProductType=p&dat=zjsJtNotvWR9k8L70JfpRGP9kmlYcWc0Ndkhlf6NoekmzqY9AuNyGrhlCSjeke1gS2oEyULy0xhHOWosCVSW1FqPkHyXLwarWLjB91n6jHhkxR9Jyx5G33sDofGI%2FpxhSqbd5b%2FXK9ZBAahZI4ylm0G9rwdLGKx%2B0k3X0uk0JUc5qKcss8rWQs3fgutNCSdG%2B3kAiHFnqbjBvti4OcQQ%2BqjneT7uXedg%2BEiUlTGvWAVqgQNHqHv7R0iFwgceyYpo%2FvvGdiIDmY8bQKBIZypx%2BfrooYvQNnZFRuvFnw5qjWNJCh4WAFI1WDAy8H4LmALTW%2Bh9EXX%2Fe%2BLM8jk6ZBJb9VdfWvMpkFt24gQK37eBZXFjFqgIYwMizUUm7uZUGVuapGyW3joROZIVYPM3yuvFjxSQ3ivFQcIejtbQ%2BBrv%2BVo%3D&pp=b59f2a8c18e1b8512d105ef62c18e98f&sc=13&ptp=2&ct=highlighted&cp=OfferOverlay&op=2&pt=product",
          },
          {
            price: "184999",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1231760440&ProductType=p&dat=Q%2BGjm2PPO18RhZRIzmt1NdDr6Mst5dxohKNOeBSUDUgstIHN8JT%2FTZ5KQwVCTZnd4Hk1D1LA3j5H5ibe7W4EToWSDK4VU4PHCKSGW38O4QvY4KltFs7dBWy5bMKoLRP7wRUqZDIUiENCioOiDPTem%2BHybbvXssdSNT6q1cOrqDtJXqKtgZGoZ6cKTQJw13NlVwbBd0eiTdlymNVV5YlauIe04nOSZCCREoZFxzh5d7iB3XoBD7zG8Ehn6Rd01sjCWpJwm6faSxi5E62oLSKUIlKAQG92cA4vpWreGtVIH2JcPzhHfFRyGDUIkK9Hq5OS0vjdPrZPJxIFXutQTxIGK4i9Lv6Nc1TQPfE3aYL4UOEDNugBOthuLqbhG1M8Q%2BYMw2XJNbFHbyG711Sf7Gk1X%2FvmTo27jUqkrJaR9tRJy0I%3D&pp=aced25892cfaf9f08efad3492cf06641&sc=13&ptp=2&ct=highlighted&cp=OfferOverlay&op=3&pt=product",
          },
          {
            price: "176990",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1230207463&ProductType=p&dat=7GLeDVwy07%2BGFHfAJ%2B2OnlpgBHIKyRGNgzihGHkIBpySOLBOX4EcdVhA4DcLVzO%2BFFeRtKNc%2FcJzutpr%2BbrjGJ1spaySSH0%2BI0IQ9u%2BZ3oWLsQfloivfWysgmVccj3n4w%2B4yFOzq9VkAEmoZMiXra3K0eQo%2ByMUyF%2F%2Bqu9EBepFn2AoiFs5hlFA%2Fq38Ue4B4A6nBGbdhx4sTnyYEbBKs0vwwuM3df3nZUMEdkAYxqxgRv2qcRMY3zzhsQePWkcHykR2j%2FuDytBj7Q2FFXWYzAdL1DkxT%2Bd3o0FbTjGDmOpnjrbz4abG%2BUQcp0DGnpb1R1tDhyurHLFH2UymUoTxSfMUnmDZIaVruK83MgKQcF5wWU99S8qZa87Z2QFos%2BnktokwXu4MYMTKYyPgDYyqChvAC1U8RucHaXeBBHwDBdJc%3D&pp=cba6482aef3b9188380e67d72aad72d5&sc=13&ptp=1&ct=normal&cp=OfferOverlay&op=4&pt=product",
          },
          {
            price: "184990",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1233730315&ProductType=p&dat=7ULQ7%2BUTBaq8mD0CuhzGgLRAE0b52niMfU2MAaWUJMX5QaEY1I5tMcdqKAqHZQ19zrkMCr9BZqXXXpGjapZ2E09vqgVIpZK3F%2FnMPmB35eJZrt5WX7%2FwIxzcGjRk%2FDZU5q6VvK9Hl2680l2N9DeSfi69RmQrTOcY8cHqEZXFE62kn9mGCRiuIOMGM3TO5GX63BjPa9j%2FuZ1KAFsMf17WkuvxQfWyStFc9XKx7Pcp%2FLicGHPM3ps3mVA3YmtGq8LvMHJRMvtneEg4LuLWtjxu864pyc4Aq6nTaU5KeF%2FoqDg8I6DPbdtepXTHm7WbVOA9j%2B%2BG%2F7byHeRsWMvzhcqch6wxmsZ%2BaRfbremCm9UlGoxeHEdAIy9PNJEWadB%2BML6IyEJK%2Bn7i6EgnnJ5jXXRJ4gbzWYu7ZeVH1bwfQGA%2BPkg%3D&pp=2d656aef2d40cb2e6809821bce2f3f04&sc=13&ptp=1&ct=normal&cp=OfferOverlay&op=5&pt=product",
          },
          {
            price: "184990",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1229457025&ProductType=p&dat=WKTt4nvJndFiVPacDhwQn4qWoQKOMD7nXZit9lBANYjdKG%2FwvgQo7icShJyiZQv%2Fhx9lpAN3tKkLr7DXWt%2B7WB%2Bdf2eJ1iKOpf1rjueV%2BanFnqVOFPoW8nW2wqxHx5aKu%2BZi%2FazeSDUEdISACOt0e0TJofQbkb6RYIysmHkk2Mm565G9%2BwJcX0npzvCbF4B1CUsk3JcSjwSiv3b6p%2F55%2F%2FyEkUUKhOa5VYsEf3cDeZnJB104Eg8VJkNxYGQvhBZsHLGzHSxpYamDO6Sq3HU1Zj1N2L7QPRiJRHLyl1T8tACiYGndHRKVTNf3vfaqAr3ExkCIcIAbLVfbNwRvFAdCHyufW8FCvWznEdXNJgh0wOb0%2FkUUrAVvcXE8AL8oPQLnmp3uZh7%2FZVxHI8ijwwvdEhwnurX4%2BfFERnVDnSW%2BCjQ%3D&pp=5656ef5d2dc90a0e14ef51012123ad46&sc=13&ptp=1&ct=normal&cp=OfferOverlay&op=6&pt=product",
          },
          {
            price: "184990",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1231760461&ProductType=p&dat=FCZNQgWvCvTOZ%2FpSwnUW9KT11uHiwV2nnAtDzme1IAcffRS8abkyTCPueJNf8XFLNll7DXXQkVFFT%2BguLqGq5H5crcKu7ASJwQzDYIwOdgVZ%2F1dSk8Iv8OC2HV4Hfy0SBtmdltyWXWJenn9yjkPmupUmWkB9geA1GdpfJeleQeAJqd%2BEU1vHhtw23%2FAK3qMptPbs3B1qtbQrZbTMsc8j1hgNbDWNH%2BBLjfLwYGJqKdHFpq3XBIITA9JaNksMLszsF8T6NzwJ%2F8IgzHku8yHiVg2zkr8QIxR0LdFr8KVXXdZNdgPUsO1wO7n7yE7GA%2FWXdYi3WeptxZiIU%2FHCJPm0mvNxwrJGNz8ee%2BV%2BmbLp%2Bzdb%2Fe2F7bDnNKh49FK11WHUvTBNohlOT%2BUPK%2BLROyX8JLQ%2FxgHPWecEoDrEd3UBVlM%3D&pp=b0320efe86205652ee9ba1adad4d13ff&sc=13&ptp=1&ct=normal&cp=OfferOverlay&op=7&pt=product",
          },
          {
            price: "189890",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1228407103&ProductType=p&dat=VlcGsKANmFLUsSYmVFW%2F%2BqyH%2B9b2sC%2B%2B0GeMR0nwtsia4UO3UkzfQYJ3LYsVLlmBk%2FosWBOlKWCW1p2rggGgcY%2Fc0cLuU22OE%2BDrRPJ67IqXK6ZuCWgjQyTGoP%2FUp1cFRTrYgjY69mfCIDc9zFtGs1%2Fa7bNuI2dDW05S2uIWwrzhdil32qHnNWJ7K16jm%2BUtvYSxI0tcQot26zUhjfXCiBCXcQt3eyxamYs5RuQt5tfcF4%2FCzFecfjWMesfLIuvOtuwNquWRrL03sEDOpM9x3lefeXPjk0zZAhFayqc5egfifHmmqOxNl3WaKufblCPePxkmrvJYwsXoR1toWoV6I%2BTYQEW0Cb8ZaBTIrmhLv6m90v0H4xpbtaPzmcdapVeR5Mx8j4m1uKxT6%2FGA04VX6kexWAGyZo6UcvwGMDs6J54%3D&pp=e3234a62e4e61dd0a5629cd1223fbc04&sc=13&ptp=1&ct=normal&cp=OfferOverlay&op=8&pt=product",
          },
          {
            price: "190690",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1232467558&ProductType=p&dat=4pqoOWlaycnCXYa3C9kXsGabHoO9XoEK5xWAvc6a4HV7%2BXrnSmnIjY6UBJCY1X6ZKILXPcItZ5JzICgX89Q%2F4oJM1iGBC%2BfdtDlV%2Beeadi8uv4in%2BZ9KoW0%2BZEch57SdBEnmMGU%2FY8WdyWYUOUULE0DnMoktDljv8ETsxRVufZqCuiEXZtwEZZvX8%2BkMuEVkRw4dBQjBZOMfvwz5XCYaamrOJvAcq28i6Onuz%2B2mNVZGs68YdfsrDhQDZazQoUstSYDVdPIdVYIQTloQ2s2qE2yFr18vV2D48MIwnZyySVtWov0b9jm5%2FAifPuYVeFoF%2B59v5XiOpqKYPZzLptlTq9OQxL3g22TEBspYFu608BpIWLYmuphAYYCcwDz%2BKX6RudHyU91Gz6gTOPvHJoUyzNi0nY%2FPqA6wDHtWrh6bsJE%3D&pp=35041241be3e22761c20b046c0d9b988&sc=13&ptp=1&ct=normal&cp=OfferOverlay&op=9&pt=product",
          },
          {
            price: "195790",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1232108254&ProductType=p&dat=Q5kAR5qopLKuR9wQy7mx1qRkbbacsYKgcqnBCT8WJRr8Y36bP%2FJ9U9lxqD8iJfUecPZY8fyBBc5hIb%2BLfhr4pupV6ZAKIGPQYKd0EpkWGlRrrXaPlFO%2FtU4CDzDVLmdoYOvLoLoDP0S1CxTklK8c9yNI0z7kEPccpbfQZyE5peBLUUDyFu3f8k1%2FiIxMqWHj93ZMibuTiRiEeePsIxz7Dovd4ZgJttMHX5QEQqgAO%2FQbfyyJoNcHo0zJKKrYJZubn%2FU7C1t%2Bu7sAQ1wluzor3TbKUZ9pn%2Bze90mbXyW8gurA7MBLuMyVOOQqAzpxUIDcTeoq9N0sgkwr7Vo8KQsfsi05T%2FGaPTAsONlJ7KNND6aXJP76pHSNMvaPHY8Xit0UIkf0QXKevO73EtKWfafORSpjzdIeRbwr1IhVbLDaFUI%3D&pp=63ed5c2aaede74363588a7fad809489d&sc=13&ptp=1&ct=normal&cp=OfferOverlay&op=10&pt=product",
          },
          {
            price: "195796",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1231760446&ProductType=p&dat=gAPJ%2FUfA8hvp5PdF%2BJOrZFmudERZYHb25pGcPXkdsvfShnap4w8Z%2FHzfAMdTQbLbuAq0MbS%2BGZonkUV%2Bc8%2FFloaIbkipNC3POZoiR%2FUQ98APSKLj69oxjiTboqvB2dryrZ%2BPaWABur9McqedF7tOr8%2F%2B9KW1i%2F0yo9pYjmy819BmjdwTx5cvtpc%2FiFC7UYqyj0QI1Hd%2Fs%2F%2FoGfEb%2FuucLzsEheg%2BlCpgnQ6I%2BR61VQwmzdAH4XOXuJYhQPaL11frErrKtLgTtPhXmeKllQvBv1v6ijxQk8AjtlJ9o3S0EUYFHJTTOBiRlhduEcFBXsnMGneaGIHbuC%2BssAIozZ4UA%2BXMs6dTQxfrQ%2FUcqFTtc6B9IaFuN157JB6TMtvtvyJ3FK0sLCzwRaPg%2FiDcmB0UKXdTj2qjeOGUr%2B%2FTgD5tvMk%3D&pp=6e25814e195c732fcef0621dcf787cd5&sc=13&ptp=1&ct=normal&cp=OfferOverlay&op=11&pt=product",
          },
          {
            price: "199420",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1228755103&ProductType=p&dat=4fNUoWO1xCpZGlivErekiogPTu%2F4%2FlDAzDI9vg4GzmunxV965bmYa%2FrtdHZDNfSwgPKtcU0FcurMFq6dwzfhNhEvfiphbOfsgMuQe%2BQcfC9eS9sDqMQn0XkBkkhz9miYp1ah1u51WZgeKb83nPMbb7YgrSefeDQfa6zZeynWrBW0dOESswLYIsIWCYMyCtj1TwNGCv06%2Bq0T%2F6vcqXNOG0KwGkKmlG0rQM4fQBXJMg78aPDlE76wUlIxpUhNRDh6SOsh44nl6uSaRcpO8OzKPwTO5wf9NCubxxyMn8i6iz0aiq27zJQhN%2BAascbL6AxHbT843neOB98uPhsM8pb1e4nA%2BfGANq5h2kpbvOW6cIZjEjApvaLfkttQYjhbx5Ysw2uUiZHEiWCqvEbxYtk5qKcI2efDzCqEiRPCC56xC9o%3D&pp=f80057f634424904a3f3c52c2c08ebac&sc=13&ptp=1&ct=normal&cp=OfferOverlay&op=12&pt=product",
          },
          {
            price: "204990",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1250617258&ProductType=p&dat=XurW7qsFO7RJTFD1axqLeqPVwptXsLZhkR7yiDBiWMmAk1%2B1Ko9IhmFZtMCGFrXZW5tG11ZDSDyeBjkX%2Fy592Q0WRY0125%2BCMC4ZuC7IVHe0xcRgC65FD%2FAiCKoTX3lU%2B3XDkx4Q3zYVmGDFtndvpAhhn9QA2GDVKq2knNqP92UWall7AXd32iCl%2BzmlgIBzqjorP%2Fj9V0BxzwxfaI2K4lihMWZ14sAr6orvxYAn8CzBZ1S83c7PBzVUtMZx8eCPcMbN9ee3K743nGoH%2BVnEdgUvCgruRPKxRgfgAUA6wnZp6vJqs%2BY1TCmTFrIM9F7qWRcy3NFcTxR2yL1qSWOM8NS254CMiBGAnnvPBdSbvMH3GFWq5btn3eKk0bKT1NGjTlM8zBVitGEY7n%2Bu%2FQA9Q%2BV%2Fc4qeN2S6HPnX%2FK3pSfcqKj6ZT%2Bx7uYQhOcW%2Fl2hm&pp=218e98426213cf4d3ed316a61b2143dd&sc=13&ptp=1&ct=normal&cp=OfferOverlay&op=13&pt=product",
          },
        ],
        picture_url:
          "https://p1.akcdn.net/thumb/1228407091.sony-playstation-5-ps5-slim-digital-edition.jpg",
      },
      {
        item: "Sony PlayStation Portal",
        prices: [
          {
            price: "89990",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1222852345&ProductType=p&dat=tSM0J4XLatI1OLUQZD9WPqr2erQZgDM8Bic2Mir9ZVPWeXcbbhEdLCdkSH3aNC%2Bffw84OYoD%2BMsOfg6L%2FIrsGIXO9aIG8py%2BkKQXKqIcOes00qZL13uEt9UMXAKFOq7hIFmieDET8vYBKf26RW2XQQ0u96tsV%2FOS8PPZ95LMNjGKOtR2kO7cifRv4qnvuTzElp54HZFnHVXfxkfMlZx3D%2BTb%2BK1%2Bd0WFInu%2FBuQ7Z6hxYKXyJLoafz31LdsgPFHfzt5lAc58vC5azjiLHmA7ZGCy8driXUn%2BRELcOFxk%2FRvlk4PXU%2Fkdy8wh1dUGIKMJfKxVq%2BzoAoIrN21fc7kJeZr7Vjbu3t0YgJtYpXgDepHd4Gwi8DVKc68MdvfAKeYHkHuzVyE8OxMU4p15Eu3x1S8zJw%2FqcOHWVG5w69nUPgo%3D&pp=4ca3c4dfd7600b4fcb73869ffdbe504d&sc=2&ptp=1&ct=normal&cp=OfferOverlay&op=1&pt=product",
          },
          {
            price: "99990",
            link: "https://www.arukereso.hu/Jump.php?ProductAttributeId=1228406968&ProductType=p&dat=PvhxQ%2B86UznWgOMwJUm6HhWqt3DZ0O%2FU138dyTNoecNZfStD85pI9CABIVejUoqsroLvBpQZnQZm31UueYq7hHWqNf5bkH0faNfaS%2FxNklDM2tMtPGO%2BBymtXal0oChNRHYdQr51e06Q0WsTZqV4W62%2BcWpyNV%2FPyXY1Kv7LlpbxBC56bFF7WkM0gI0oXaq7CXniGcehIXbvHj3dI4458BsspjBlJppgEtElQcPRTnmU4bLknBHGXfyHy5uEJhmVS0V12K%2Bqkge%2FEDBxwL7iaeojkYhYq7NyvEdQs25xSAeMS102nk5fbx1Au%2FUhrvnrrQANvEG0YvAcf3mFI29xlQt4VwSCPbfp6CNugT72fBTWqRbHT9YgObXW%2FGGFl2lgaNGyI2i5Ppro0trXETH9PMZi0n7nErmydJy0CsAibfeh2ceDOQAgWkM1XQsRNviA&pp=f56b92b9ef48860403275aa70dd5e125&sc=2&ptp=1&ct=normal&cp=OfferOverlay&op=2&pt=product",
          },
        ],
        picture_url: "https://p1.akcdn.net/thumb/1221163378.sony-playstation-portal.jpg",
      },
    ],
  },
  {
    country_code: "AT",
    items: [
      {
        item: "Sony PlayStation 5 Slim - 1TB",
        prices: [
          {
            price: "175732.19999999998",
            link: "https://geizhals.at/redir/AQAAAPMlRhi2oVGxmRQHOVvmKfUCi6kuvRhQWPeUMlwZ399aWob0-myUlJkeYP3JG-yfGO2-PCOuKLKss8_FSsf_X1ZO_jxdwAWtFKSv4JV_8dBUkC584KYpqSUgTV0Mo_wuCOr-UkyCYgLYWVMZLKHCqb2AoO-vF6f6h0XkQHZUC4dmU5b22Goib3NpCj8gshclmnQHaveMDjcYB469OBsVyZqvHNZvl6T9tvICqwzrttUNS_KtUOaWnVE06yXyjh_y-blA2qZ7kjQkN9HxFPSdy01_7AWxb_pKRdked-bVNaZH",
          },
          {
            price: "177244.19999999998",
            link: "https://geizhals.at/redir/AQAAAKZF2KIKFKcuO8HfpHmhJXDKP4vJEH2CfNeezeh9c1MELPDJdLzNkTlqqSxNA9BAtn0f0AgG_qyF6DqAMXVD2uHvL3f2UlZQmMnk7nf1OhlGP9tK6R6O5EMLXiCccpjcqkFhPqfrz8i8JfgdKq6eO2z9JuZ1i0S9R1LJuJ9TMj1I9Sk1yik4y9ii0kslQXQJ7Q",
          },
          {
            price: "177282",
            link: "https://geizhals.at/redir/AQAAAC2b6NlbjlV0oFHY6RuF1u1ywdkK3bJX85psZk5y4VUFrmK-UO2A8XZZfhNydGkvwosUDBlk5WPg_vPlHIrq5pZIDMKSZ2-pmjYSP2AoCoHUWTslK7t7l8GkbFpAUtzM1w",
          },
          {
            price: "177282",
            link: "https://geizhals.at/redir/AQAAAHczII6F0AL5ASPSLXLNSgpW5SwIUxoDWriLdGP-2pw48aiAr1JefxwbuVyJCl6nCV5BDm9hxgPTuw_2Ne90_Z0qu8Xjoswu5CCyhF5VH1eh5TcTudQs-3FQ3DOXIJv3hddPuyjPoDTPUXGvRA66qMmrzoSIVXNRWb-NGbCVlQjLP2kFCd1PfIS-qHUv78eNkknPTQ3GOALeP4qs8TFWznSFWrlqiIxdpgz4_bCTWdk9qe04_yXtmylVrKUsCCzrqRk630mgpCkMX9To6X8DQJDtBXKqlMhTNKQFVFHTRgyoQggEmPD-NmcsCE2R0frgd6YqbRJdgSUuM0xUbVJoLwN_8kok4lFlK7YoKKF7N1ab",
          },
          {
            price: "177282",
            link: "https://geizhals.at/redir/AQAAABtEEiLG-ZqxRDbPAiLM3SDPyWr6NIPZ73IkoskcVlNd1jrCEleavUn_7VoTeQmhmHU3pzkoVVYhde4jZDrfYef5uOUD4CPWqecda6Zb6Sww5qgpVqH81JU1vDSgL7xdW6Ghxe92zVme6QtEeNtSFfCpvSZGWwZVR4HACCt8lLYeaFqouoAzt5pGcH7ezrhhDQODiLZZyND0GuNOeOB5OI5BsaQnqfQY1Cf2GpwD3gD-eviPQTJaQfJ_ceQkYS44_kBu5LtwTmGogsGHROLsjtQLrBnVF3gFU33bQ4yEJjkH3cj6nJQHbfI7xWMB06Si308fJfSOTXGZY74E1i6ZcUc",
          },
          {
            price: "177656.22",
            link: "https://geizhals.at/redir/AQAAANh1cbE3rlC0L6ds7VSkGirPyWr6NIPZ73IkoskcVlNd1jrCEleavUn_7VoTeQmhmBNm5o0wEhpgPIkhBDpl23AkVPZ-LPcOO4IdXu7bOaAvefqzJf9cAHPIBtyYTDqPNEbmyDcl7Me58TmJRJ8C6TF9Q7yL2KQ5kjpnK9s-tTY9dnDNrqasOR08tLd0Tu1UoOcNO0-DKKYX2jVIbBUAFjnhZB4O7P9RwREWSkmuBk2B91u36HeYlzDRT6tt7rVjXXeLy_c86WM797y95OnW_-_Iapmo0b6e53wyI-uQoVOKtlyckG2F-Jf0mr6k2N0hvX7_iymTkDbcxBtUob5wgBOVS4aUS7fh4ndnm7zj2Me2Nbek7fM_P6vRFqbaNnQwk6Nlxnu4tuJea9cqJjK4cZA4zWhxiBr42A2VspmJ3SJ07-akiINjXjZpHDrWn2ZlNETgfOOjF87EFkka33IMFMyBE3S813XksPh-d3kzeQ14AzQ3ZKZ67egf3x7qzliwo-2uft-kUfDqj8fcbD_WbZg85kUf0dSu98qrqgxGkrig_37mHfOJlJYNH13Tuh9hdQ",
          },
          {
            price: "177656.22",
            link: "https://geizhals.at/redir/AQAAAM__Z1CWdyyAW5g_ql8GFDnPyWr6NIPZ73IkoskcVlNd1jrCEleavUn_7VoTeQmhmE-a0s511BRn3sFUsgUkKNFvGNDgHLPMaXdbjq9G67947jzYn2ARC8ZgtFYDovAcgUcCLtimNYqHWxc-zoFGJiN9kEdDBXS4PUvJeHDcejeAZti1pSv3Fh-K-zy4y7HHEA3yK465Nw1SmKE-uTB1zyp8N2fjaTOc30_NvPxLZTQEvgEccnm7jBZSDlh5Ij5w_sPCbi8WW47ud0Yr5hMXDKCtF-AvKkeYPb_knrohN-Dw54kfgohlIiBd2opxFLPGAMJUUmuZIM8nIfVNKw6g6Px0grl5rpuFmHzdyHWu47XqRAQV-Q-LkGD8yfeEfr5Xwk3Yj-x00NAdN5N742wPHJRM0R2u3gkpaWfdMkr2QEksUGQk0kwSoAJs6NdNHrxODQBV-FfOPHp6GUloV4B6DQoWU8KNTqVbsK_R3ilzep5l8Yx6T8-XAmFWGPxEw-ckbhJXEbdg-ym-ccu_-luj87D1KTXKKTjL2KLSSyVBdAnt",
          },
          {
            price: "177656.22",
            link: "https://geizhals.at/redir/AQAAANX3r6prDqiHWhvOkKzyQGGN-Tr8dmwJofnZ4Pz7H6YH_mbkt6FTK-FKTsVaRlhL9yapqUDsEqBGQqeuUFHsjbcU1ZVSn2xqwWMpgacStPLRNlzfeUeVH8-_CM_AftzoSoRKeEpdBiljXqOCyTNULzk3KRDw9ZDgOZr3QZPIPSLsVALf0VJoqIhc8iCIhX2r9oiYUrqbciioJg2usIWNPpSOhzYpbfMctoWK2YhBiQChfqitXb0DzXW0HL5I_qYeViTzG_AqApk4rnGg-S64r5bJy-E_cuT3AUCMtDAiL_Sd1N1jrq_FFSqZ7TUSgxrzfspmo1SFP9dxM5McEG9VomgwZcC8adnwva7OsMbf5v7BhlKPC8lfUPi-U74DNiFUb4EZ9LNu5GdPi1Cm5eC6DjI",
          },
          {
            price: "177656.22",
            link: "https://geizhals.at/redir/AQAAAJ-ybPLJdf-cg-_MhBUsQdkCtgL0IjJH0dW7tZIKs8DpRrONxHGMaBLj0IYApijQ-WMAk3v9X-KWFwbY-95_zaf9pf6It51VVkBkQx9sSkujhTdcaSRdLzKPkTIj28oakTOc5imog3vBbXENC21Inod3n2ol3YEU0FdAwDD6pZm7fKyhLwPbIhs7TwPyrYIEAsQe55xq1FYUlnH45ZRZbVnWr8TB3U0qOzbek7rq-MDM6WHa0Vxcwy7H8nyWM0I8ldmRi6bDWpc6QYzQ9JZeLEDmkpBzqn_NBgNZrT8q49SyQNU_280jDR0vOc11kEH0l5JHJW0qEONMctaq8LT_8LNw7mXIu1W51Cv2tVM7wfk0kOPMBm9hRnYNCWfoY2_XuNZB-Apa1lfy2zNvy0bvK3E",
          },
          {
            price: "178771.32",
            link: "https://geizhals.at/redir/AQAAAAaDjzCfrkkdgamSmljxjDN4NLxMIZIQz3b17maonDreoiYxd6-WZtAXJYv5ZgiwQ2hvjwEQksCUo4jjC6m6UTgh0Tr2SaEj29Yufz45QArq_7ZQsVLPIWXLDJWvL4sEDECaPP6E2frj1br5Y9pDEy8heaeY8F_chlkMi34gmT7OT-0-10bu5UvDrvQ2D1D2aZDjzAZvYUZ2DQln6GNv17hkFu4_pATMeqDf907uuerq",
          },
          {
            price: "188622",
            link: "https://geizhals.at/redir/AQAAAB8v7YclMnfv9k2cK6LVsuQHxd0Df1EYcSAKSwxaEd5Pp4oaPPQ8IcUfP4nfMeuWwcHgJcMU4y2tV0okw8QDfC8pShHw36JQ-tMjS9GU6Mqv",
          },
          {
            price: "188622",
            link: "https://geizhals.at/redir/AQAAABm9IdiMhwrQ3Yq6Sec6JaKo03QV-iMQZvPLt7irurk1a33Fobt3NDiwCioQGDuB3CzwyXS8zZE5aqksTQPQQLYqs7a8v1y2kwbbgjfsAZjlZxZiTTAEubAqFXZtXOYDYupn-0c_wkRRbl5LJkh4AYtboM9m-U13cGVrhH7V4C5b",
          },
          {
            price: "200332.44",
            link: "https://geizhals.at/redir/AQAAAMlcr8WiwOHSx4KL_9iQxdmugJiCQaO59Xx_b0jvk_WDXqtK81Epe76miNRZAiWsK2HVDuJQvareU-HIvc1P5DE6jFs015MtukqTwrZEoI8jjEPUK0T1pWQRWETvOfs-92C7fB-GnVGdfjt1n8Urkv0VcrB2rteWgoskFHCCbTn31d5hGl5zt6ygnVE2EtQJzl_-Uwrf6MLCczakIueIBLo",
          },
          {
            price: "201375.72",
            link: "https://geizhals.at/redir/AQAAAM55JsPKnWQjILUmFFqoWIRUyo_mx6CfO09lIBvQMwMXFQhBDkifyzjjZr8diBLlQ4LwBEV9SzNj-f9TBlUX28YZUsfIegJ16Kw2U4MoJ1Eg7chwqOR6DjtRUDqPfzaZN1zTjmkptNtcj8r3MiPTIg0-Pyy_J4EU2npooCH4lE7kHUGuAO3NngmkHc4x_TRknS-SyjASyDUOPNla8BsV9YgWCYXNt9qIX1jvuVe7yVx7FXKwdq7XloKLJBRwgm059yVJwsbqdj3EIbNbWoWrQhVf_lMK3-jCwnM2pCLniAS6",
          },
          {
            price: "203742",
            link: "https://geizhals.at/redir/AQAAAD4V9XoIHvR_ReY1oL8UI0lmBq7tPZsFGouFyEN2FQSvqAwyqaBeauy6TDVW0SKoJZiGY1MS1GvV3cKTvtwcBGIWtoCqe0Fpd8h_EFRxmGXRYrxGeYB6_xou6KJNGLWLC_eAXFcr45MfsEsZQcQwtgHXItcLAP3TIaF_vkIgEEDL7WwbMx75kh2pkcPjvst56paEbBwabshZI17snJ6wamUc-Be_AmyFP7DOx9ZN7JUFKyXMVUQbJ6XA-N5tMo6_3HgR9wrSA17lFspRIKL6-GhOfHaO6tQhrwrm-RvOmhjmTr7npaEYob6yvq8380yoL2qBYw_S1WgkibsCwi12Hfo",
          },
          {
            price: "204891.12",
            link: "https://geizhals.at/redir/AQAAAIprbOLUDk9HMKD42dcNXFhmBq7tPZsFGouFyEN2FQSvqAwyqaBeauy6TDVW0SKoJU2XTv3rnstqqKCx-Os8Tzd0gPcxytC2rt2h-rQS9TiyxUD9R1MZW9WHsU0zyX2tEb2ZVnTZ6XWycz_xRjXkJ3QajrXdQ-98wVudsLfNF0onY40g1TuAjBmzlDRumihUCeMtmpRnWqBIQ3ubg0yy3nvzL7rpWP9NEOKrHXbvJRhWv13f71IagWJQwPz4g7Bq0x4jSxXJvbNhErdwm-cVVFdC27Pth8_qBQNPyiiOPiHuOoiIphYMvwyWFEB1136zoQ",
          },
          {
            price: "205250.22",
            link: "https://geizhals.at/redir/AQAAAEx7rDPqLA-O1T0bPKdNuIhP6ZZZuZLp0C2hjvdZGQhZwcwlXbkcQHsGEz9rfJqRJ1tBkvIl0Z2UtfJNoMHYfoTnRdAavtorni19UDbcOTyvfWwKQgLjQBCLdidZgzUCQ7LRX0AkKnekpq38ygKFtF2ACrM2FGBNS_2lIpBCab5xh4j3RWYFsJstj3SHWdw8hOUNQaZwKLOKx8tj66edrFlhZ6X2vAHQvXO1b7p3Kcs90qIvz5OgQySD6M4BfzrnUfmD02mgfMljW12p1yPquO4",
          },
          {
            price: "207140.22",
            link: "https://geizhals.at/redir/AQAAAJWAE2tgFC9FDndj_IPxjmOvt62kUHUVezpzpHtggn51QYGA8MG6xUHblRjaDmnZSilCNGpNBszoHQfczTNjzrqhr1UeE4yyQzyDrb7qtPwqVI3duTpMmkENv_M-N-5fS7SzFWij7ZWuUPX-cmPuEHF8zCBqGH6hcmELfXfAgFGF_hEJBMDfaXTXi1sC-sCB7o9bmSOgc0NDfqJDIPBAJl-M5I6vQBEKaYUEYlumYb21M9KeDkQDegkMIwIxKaBTwPe_1gNxKrFodvXf_vK_RjBGwZUNKJCMCtvGJI_-0jsoPOZFH9HUrvfKq6oMRpK4oCEallDlhKIW1u9yPLqnbCs",
          },
          {
            price: "207522",
            link: "https://geizhals.at/redir/AQAAAELJY7zYXcRLuRZOWeHepyuwo3yzXp0j2oZ_z3wkfqid3q3-xzK1AO6_JRlAD0Iq42py_rWvXAe-wQ2RvmekQGaY27x1US80B7gNJbpRJ4kPQtuz7YfP6gUDT8oojj4h7sQc7HfJRurGHOlhryDZZlM",
          },
          {
            price: "207896.22",
            link: "https://geizhals.at/redir/AQAAAJlNSoqxYcsV9y66rbPj5R_PyWr6NIPZ73IkoskcVlNd1jrCEleavUn_7VoTeQmhmMYSWEnMzNDTSK0oxImNYIX5uOUD4CPWqecda6Zb6Sww5qgpVqH81JU1vDSgL7xdW6Ghxe92zVme6QtEeNtSFfCpvSZGWwZVR4HACCt8lLYeZPd4Q8cJGypM_669-I5GDmJ5ZzKE9mfmZE2GGQlAFTVgociOeRxRHEC7-1wy0-gsOqdqKtjZlPgm-YHdtRKcjb0tYnisa3rAZWBIsmlf5iVWLW_EoHHKCkqj9EMxQ6hGhlKPC8lfUPi-U74DNiFUbxLFZOZLY4KPGerkFT5IqQ8",
          },
          {
            price: "208134.36000000002",
            link: "https://geizhals.at/redir/AQAAALs0pvRwiMip98QnG9kHNYO0byABGBwj5fwwUHChFhkE2Fu3yM29ZPesvTDDfJqxFxLFE0XlJ1Sp3f8xkTVnxXOl_iFZTJEaotxRRlb4Y6lLyYKZPfEJWa0QSbYESr2ZrblA2qZ7kjQkN9HxFPSdy0011hwh2NxpiogNmfqbE7vG",
          },
          {
            price: "211302",
            link: "https://geizhals.at/redir/AQAAAE-QqllWIOAPuH6RbHpb72gp6RYnmniK-bOKof8KyVEg0zLeF9ZReLr3_TYG8d4RvLHpo8BV_63LK2GqJKWapEhxFxTDo7rvhUFXALC7V9KoSAzCkmdvqZo2Ej9gKAqB1CvRkmifmFY39PDcYCr7gBg",
          },
          {
            price: "211302",
            link: "https://geizhals.at/redir/AQAAAJt4tY5POS5jBoKV7vq8qTx0MEe78xUrrqqvstJ7vySuypQM6aNNWY_FJQKgqkeihorQM_nRmE48_dwgeysUR23kF4HUKw0NRCj580BQCFo6tgrjOj1t2Zvfn-qSd6q1v4DTeJwbb1WdTjSTy_wA3JI",
          },
          {
            price: "211302",
            link: "https://geizhals.at/redir/AQAAAHi9B9XHVBTpD8h9b8IP5xC3Ikd4zYNenx7Aks3y8Oq0qVH1EOoPYLaikSPHkcUvDOAmi76gRt4o-y6eQN-cZNKmrsUtOmgdTNZeje_RcQt2Y3IQeU-Lu1mBkxjtlRpo8LCzwLjjPaIf3FUbHxyEEKfV3bT85cb-CJsNkGOE6gybze1tc1E9nyxBUx2e4PTzKEnsHTHnCl-JvZXXged6NhckQJB2EDjKhXI1Ba9zwJ2FzlVrhzIj3w-vOqXC-LtcMIZWMp5BzL-WTmjpHecI5V-Q48wGb2FGdg0JZ-hjb9e4OaW0aD8PvWMTfV-PCqejdg",
          },
          {
            price: "215074.44",
            link: "https://geizhals.at/redir/AQAAAJb7v_z8V6PM075G9lea-aFRMtBknvpRZCJi3M9l8ovRiPAt7XAhYynsWEZFcL-cIOSsaIHpFPzwcvoT9W8I0q3mYpSWUz5pqx0-1CtnHPeDcLInX0GlBW3-IFSAfkWWzElCHDI9WkIxYBn8X89QeAZRFlRACRNPbfybEg6Q0eBlrWvAjPCtL0ZaazNixQf0xA",
          },
          {
            price: "225325.80000000002",
            link: "https://geizhals.at/redir/AQAAANHEf3MOOeSpkDBD0QT2LVx0FFGd5LimYJnnlx8TeKYjWhx9A8VDP7t46aLSRxt1OA4PLmilXiEwQZlrycExg9X14mhL6M_OYYqf_y93thacSAzCkmdvqZo2Ej9gKAqB1D8Tsla7EoGj58TgsPd4fB4",
          },
          {
            price: "225760.5",
            link: "https://geizhals.at/redir/AQAAAOUupdFvfRrkWZBVAhSGB1zJoUvh4nqEYekLTsHcJu5ZtRR8wNiIEME3TK0RtXQqk0NNsf5_GH9PKTKMP7GUFzatOEJIi3RAKx6pwP6J_Ns6nDZ461-8Fi4q4fvASk48FbbWsZsDmj2kOWIXiJiVGrWRwLefD5i2Uu1gif_Klps-C8Zb-GwB00-K9oBMCY1WGN8WZ_ZgzQFbAK88EvOwujTJJuqmcuKigO5VxG0lOe7vFXKwdq7XloKLJBRwgm0599imzRxLS0E_IaIrEY1nvPlf_lMK3-jCwnM2pCLniAS6",
          },
          {
            price: "226422",
            link: "https://geizhals.at/redir/AQAAAPLBfeNrz6HV1T5yP_uAj0bPmsV14lIgx-vWCh_xqWPfjF5DofFvsbLWF__qqZduacE9LArgIkNfbokgIGtyRYsv6-x07jU6QUotbZ-OdcqA14rHlPJOiX6iQNUyIqbxfkl_2M1M_PnTlRPb-ospP8-Q48wGb2FGdg0JZ-hjb9e4RhRN7LgkbgEXLbC0VvJK2Q",
          },
          {
            price: "233074.80000000002",
            link: "https://geizhals.at/redir/AQAAAJ7J0zhFWwwHjOrS6UxmQOCWWCIcIzNfuXGmanDCjUAgTO0jnZkE1r5xvLJv6RyNaVJ5L8i4gfP0wPp46D_KQ-YEEzcQ3YG2TCutd61tAdj-XYDLQiOaGr2nf1zAtkWL8tvqg7UKnFretRk7hhQYX4x_7SYaFCEa_cT3djCnKHTn",
          },
          {
            price: "235116",
            link: "https://geizhals.at/redir/AQAAAPXsaVy1A6dkqnKS05xVzqWWWCIcIzNfuXGmanDCjUAgyqHrcApg10Ndq6vu4Sh0p3vFCxAxEu41lYEYEEOxuzj6bSrfOMccMEEhKg8LSKo9Bokny4kppWzbaiEhCZpHBlkApj5NH7KfW_jBZAf0qJLqZ_tHP8JEUW5eSyZIeAGLliTrGOG-a5EX7OpXQwc-8Q",
          },
        ],
        picture_url: "https://gzhls.at/i/91/16/3039116-n0.jpg?ogircp",
      },
      {
        item: "Sony PlayStation 5 Slim - 1TB",
        prices: [
          {
            price: "199168.19999999998",
            link: "https://geizhals.at/redir/AQAAAHSDgU4utGtbFYsENlaX4JcCi6kuvRhQWPeUMlwZ399a3m86vcRw8Y-6iczTrAAzSGwTlhp1_xKa3y8muyh6xpct4xL5olrWhdT_iXYu21nKTjQTyrMNrnK_h7rAxEznEBLbXie8hStza3GmUAybyHro6piTqJ08JcC8nnKHfadmjUE-AgaqV3ScyKQaUyz8phOupfAO3tTEHqaywCu8OIBfC3KRBe1pR6HwK1qiqz9LB5g-nFIib8ccs3hy1RnvDBkx2LNZ-uYgWbb_DPWZQrlCCASY8P42ZywITZHR-uB3OA1F4vK1VhYxdlc4byFmtn_ySiTiUWUrtigooXs3Vps",
          },
          {
            price: "199962",
            link: "https://geizhals.at/redir/AQAAAHRc-_oM7Jh0sCRUqwiH799W5SwIUxoDWriLdGP-2pw48aiAr1JefxwbuVyJCl6nCYQwfokLCAGCMsBAjQ0TdQNaRRd56AGbMwxP0hLI6-0Phtd7eXmJoF-8Or4qxKABHY4xPRLYoB6eDx6lLR37fn7BK2haz2mp83RI9jBEyCaL4TGeSXkkCBk-gVq2XKGxLhvM0xg-XrmeInpLawvQ10lVgDyz4PQs467-cPwDQzBUYf_SM31QMds4SvDqdvL5D73nW88PMgMQYDsiR3A2sq8pU_G7fagIi_CDNHbLAAKYnfPh3HjE-ynY1r7SjTpTIIZSjwvJX1D4vlO-AzYhVG9sLcrZDiMlyS7rb8jyjg0m",
          },
          {
            price: "199962",
            link: "https://geizhals.at/redir/AQAAAP3RYkRtSvQCvW1i3l3xL7pRFAcghnfuEey44i1hEzxf2KJaf0DsfvEg6T9zId_csfxdgMziDRY23dUElRdQaoyN4gr_R6yookCJougyjemVQihrSZ31PrmJsBQRwWyI2NYAMxBqnqEx4gUu1mGn26q2CuM6PW3Zm9-f6pJ3qrW_CnfO1dv6-L_6At7Gg1_m4Q",
          },
          {
            price: "199962",
            link: "https://geizhals.at/redir/AQAAACE-7ErGvlbyo9M20nJcLk_PyWr6NIPZ73IkoskcVlNd1jrCEleavUn_7VoTeQmhmHU3pzkoVVYhde4jZDrfYef5uOUD4CPWqecda6Zb6Sww5qgpVqH81JU1vDSgL7xdW6Ghxe92zVme6QtEeNtSFfCpvSZGWwZVR4HACCt8lLYeaFqouoAzt5pGcH7ezrhhDQODiLZZyND0GuNOeOB5OI5BsaQnqfQY1Cf2GpwD3gD-mUrrBFyFS5lL40jos-AnIjWBObmJYKvI_0yErBBG8DVJHtW3ufWeAa9AD5RG9ipJ-rlFYrJC_HIYuyz0BTs1Yl-Mz8zZpR1p9gGrRUynv-KGUo8LyV9Q-L5TvgM2IVRvbC3K2Q4jJcku62_I8o4NJg",
          },
          {
            price: "200336.22",
            link: "https://geizhals.at/redir/AQAAAEU5ezY4S4a9dnyQFuEb-o3PyWr6NIPZ73IkoskcVlNd1jrCEleavUn_7VoTeQmhmBNm5o0wEhpgPIkhBDpl23AkVPZ-LPcOO4IdXu7bOaAvefqzJf9cAHPIBtyYTDqPNEbmyDcl7Me58TmJRJ8C6TF9Q7yL2KQ5kjpnK9s-tTY9dnDNrqasOR08tLd0Tu1UoOcNO0-DKKYX2jVIbBUAFjnhZB4O7P9RwREWSkmuBk2B91u36HeYlzDRT6tt7rVjXZvc8UzEcRFflBkxpwOGvNPVSKyxzXyhBXawuXNb36VD65jI-wQfq1XDudHdRf7rjy7-ZvUO-8UanL5MBHDnJwHATgMYkzrAgNHXlhToC4E48DYygrf9WbV8NtzT6YgbQhENbciSmILI-tYWOTZBR5IhOocSjyR6Sf1URPsoFnW0CroDHRzrfd7fhGtOEwWJE1kOwhiW24bcR_tmm0SdCjmHxpIK3kGy-E94hDj5kokaHQ-8Z5jbZ9GoPu7xFsxLblz09ZEUvOGFnn2y2E4CV0KfVEXlgkRY7DZbg5BRJMaXTw3xs9EczSOf4xkcfGACUxc2MFU4o3mMOSd-D11peBU",
          },
          {
            price: "200336.22",
            link: "https://geizhals.at/redir/AQAAAEInnWcIWh0QrjW3q-BhXt_PyWr6NIPZ73IkoskcVlNd1jrCEleavUn_7VoTeQmhmE-a0s511BRn3sFUsgUkKNFvGNDgHLPMaXdbjq9G67947jzYn2ARC8ZgtFYDovAcgUcCLtimNYqHWxc-zoFGJiN9kEdDBXS4PUvJeHDcejeAZti1pSv3Fh-K-zy4y7HHEA3yK465Nw1SmKE-uTB1zyp8N2fjaTOc30_NvPxLZTQEdyLnmFFL6E6Q10JJUJze0Vzp8gzaYqBbms6HgrqJHy0L2RDfJ9dxRtyOYcLl0TnvebT0fnmUDi7XGApg60u9tVnu0_WCv_Ye5UJbZBeNZTcmf19Cn5nwcOgpej2tubeY0VAJWSPDQAgzCdzMKVeAu6zzZXMj1PJiwnCGbCli6O8OjSdT20SzbggMJQro8mpl1hSbXUpOISchSMoAaXuhO8GJsBZ4-lm8WM4ueTo8lotlJBdG94oH88BCug7aYk_T6HwkTGRONWDbDMUqgW49OyQ6rsPQf_kGJOHmbDCO9cs-C-ybi9PaxfHd4TdjNroO",
          },
          {
            price: "200336.22",
            link: "https://geizhals.at/redir/AQAAANX3r6prDqiHWhvOkKzyQGHYDC7kpxId9dA7zYkmtUze_mbkt6FTK-FKTsVaRlhL9yapqUDsEqBGQqeuUFHsjbcU1ZVSn2xqwWMpgacStPLRNlzfeUeVH8-_CM_AftzoSoRKeEpdBiljXqOCyTNULzk3KRDw9ZDgOZr3QZPIPSLsVALf0VJoqIhc8iCIhX2r9oiYUrqbciioJg2usIWNPpSOhzYpbfMctoWK2YhBiQChfqitXb0DzXW0HL5I_qYeViTzG_AqApk4rnGg-S64r5bJy-E_cuT3AUCMtDAiL_Sd1N1jrq_FFSqZ7TUSgxrzfspmo1SFP9dxM5McEG9VomgwZcC8adnwva7OsMbf5v7BhlKPC8lfUPi-U74DNiFUbxjRYXahREWb8NdBvyK_7OU",
          },
          {
            price: "200336.22",
            link: "https://geizhals.at/redir/AQAAAJ-ybPLJdf-cg-_MhBUsQdkBjf2labR7gsEQ6ba_qzVIz8K4InxXkiCw0Qt5vsTb12MAk3v9X-KWFwbY-95_zaf9pf6It51VVkBkQx9sSkujhTdcaSRdLzKPkTIj28oakTOc5imog3vBbXENC21Inod3n2ol3YEU0FdAwDD6pZm7fKyhLwPbIhs7TwPyrYIEAsQe55xq1FYUlnH45ZRZbVnWr8TB3U0qOzbek7rq-MDM6WHa0Vxcwy7H8nyWM0I8ldmRi6bDWpc6QYzQ9JZeLEDmkpBzqn_NBgNZrT8q49SyQNU_280jDR0vOc11kEH0lw_e4TGWZ-dWMbqae3bWyO5w7mXIu1W51Cv2tVM7wfk0kOPMBm9hRnYNCWfoY2_XuL7RFQwEn_51Wov1jaicoik",
          },
          {
            price: "223012.44",
            link: "https://geizhals.at/redir/AQAAAEX5aMctyX9Nqt3HmeuQGFGugJiCQaO59Xx_b0jvk_WDXqtK81Epe76miNRZAiWsK2HVDuJQvareU-HIvc1P5DE6jFs015MtukqTwrZEoI8jdbyYp3R4EH3-uWQfjWV2Fzin7cvIJtDdR7CjK2vs-VY8Vh5BS-gEL-7p4sdElTVtXJ_wKALAJZFKap_xYiYwsLzrWcw_9av-ilbBkrxyY8F_8kok4lFlK7YoKKF7N1ab",
          },
          {
            price: "226796.22",
            link: "https://geizhals.at/redir/AQAAAG8ENlQiJz0SdTFz9X9tVlHPyWr6NIPZ73IkoskcVlNd1jrCEleavUn_7VoTeQmhmMYSWEnMzNDTSK0oxImNYIX5uOUD4CPWqecda6Zb6Sww5qgpVqH81JU1vDSgL7xdW6Ghxe92zVme6QtEeNtSFfCpvSZGWwZVR4HACCt8lLYeZPd4Q8cJGypM_669-I5GDmJ5ZzKE9mfmZE2GGQlAFTVgociOeRxRHEC7-1wy0-gsOqdqKtjZlPgm-YHdtRKcjQuSNGaks_NGwW4JkgWUiO1gRKi10bvlZvwdSxFMvBWQoBl7qUB97fUitsa4nmnLIZs2f5PmFedkcyVJnzUwO3aQ48wGb2FGdg0JZ-hjb9e42gFa5lSCG5TcGY8n8GtEOA",
          },
          {
            price: "228058.74000000002",
            link: "https://geizhals.at/redir/AQAAAOm0GnEr3RzPIe30MlNqIRJmBq7tPZsFGouFyEN2FQSvqAwyqaBeauy6TDVW0SKoJf855RBMnobX2ctjODR9lBnniUYYeXmeuVZwjaBz1xFCysDScEVjCptgA4yi04Pbuwvhit_uNxxoVzu8ea3Onqmt4grtZTNUaUJv7YdjLsdTXEhBjgCWgxF6Dz41ttcqGgJuHjzHVIhJ1BN0LDmijc9DU-yDlvV3yjPkDaSHfXvRPvegOgH6c0H1EeGB_oBYrlxRbicuiv0HxoydgBd9bApryt0JeadenKTLfQ5sTX8VidrT3qeejjInwBll5qkXtoZSjwvJX1D4vlO-AzYhVG9BSHm7M0nsiqmkAaV3akHM",
          },
          {
            price: "228312",
            link: "https://geizhals.at/redir/AQAAAHi9B9XHVBTpD8h9b8IP5xC3Ikd4zYNenx7Aks3y8Oq0qVH1EOoPYLaikSPHkcUvDOAmi76gRt4o-y6eQN-cZNLHgzrRK9C4hjk7eB-n27Jw2Z2fnBYdGj9wcjpZaM5PsPKn0NiYppBMoLWV898aYALV3bT85cb-CJsNkGOE6gybze1tc1E9nyxBUx2e4PTzKEnsHTHnCl-JvZXXged6NhckQJB2EDjKhXI1Ba9zwJ2FOT-HSTemeInFm3i1HcJEe4ZWMp5BzL-WTmjpHecI5V-Q48wGb2FGdg0JZ-hjb9e4BB2s4fLAdQ-RbweIGHyajg",
          },
          {
            price: "235834.19999999998",
            link: "https://geizhals.at/redir/AQAAAJt4tY5POS5jBoKV7vq8qTx0MEe78xUrrqqvstJ7vySuVoH_hVRirJMXYbMvh-DsPYrQM_nRmE48_dwgeysUR23kF4HUKw0NRCj580BQCFo6tgrjOj1t2Zvfn-qSd6q1v_TVxg8Pa3ubGjnqbCXEOU0",
          },
          {
            price: "237418.02000000002",
            link: "https://geizhals.at/redir/AQAAALY8eruWY4Z4mraG3Sv6hXSWWCIcIzNfuXGmanDCjUAgSssQ1sRsW-SRCPPbdxjexI3qYafULk_MpA-Ytv9u9b7k04x_MzrXmd6SeINUYwMoP12MYvKfsEvatNJH49AopNAd1pALfwQbnUh280qCn5vYzDvW2rTJJTrnczX66rB2",
          },
          {
            price: "245322",
            link: "https://geizhals.at/redir/AQAAADy89AIycj_57DXkFQ059P5iZ1bj8f_7rGTG5pNEzB8KWErQLODmForXo2AeYiUXsuMtmpRnWqBIQ3ubg0yy3nsVMbpPxGcBkbJs-FGWnXic8_LcpCqPAaoSxwrP-6WlpZwibnOzQnPT2ww6XgXtDCCJDg-7ak8VUwHuMdQv5Yy5OKVXwc_BW8YupBMiEAh9UZDjzAZvYUZ2DQln6GNv17iDVogUmsNI4b3h0a0Joxmf",
          },
          {
            price: "250209.53999999998",
            link: "https://geizhals.at/redir/AQAAAMBX47RySPbUK9PloNI_EqyWWCIcIzNfuXGmanDCjUAgYen0wS1eRrvEYlr9DoPgWnM8PUecu3xaVjwZI-ASOPC6oNdrXEDx_lcdQERLchwRk13xvv3qW6IAQ46X8JG-YqiTc8UQJflh6ZnQ_Ie3ld3vxxIg6r2tJMUTYJK3wtk8",
          },
          {
            price: "268357.32",
            link: "https://geizhals.at/redir/AQAAAIsYi37eGcOvb32z4ZQcQI2WWCIcIzNfuXGmanDCjUAgLePSdMJaFnzsMHdymwAvwlocfQPFQz-7eOmi0kcbdTir7uYMITAWZMUo_V3T0UGytw-vJG5cvL4VpGnqcicdTob_SZZ30Te5bygLDgEtw17xtNGD_TetbXsCfaIetWOz",
          },
        ],
        picture_url: "https://gzhls.at/i/59/77/3125977-n0.webp?ogircp",
      },
      {
        item: "Sony PlayStation 5 Slim - 1TB",
        prices: [],
        picture_url: "https://gzhls.at/i/91/40/3039140-n0.jpg?ogircp",
      },
      {
        item: "Sony PlayStation 5 Slim - 1TB weiß (1000040586)",
        prices: [
          {
            price: "175732.19999999998",
            link: "https://geizhals.at/redir/AQAAAPMlRhi2oVGxmRQHOVvmKfUCi6kuvRhQWPeUMlwZ399aWob0-myUlJkeYP3JG-yfGO2-PCOuKLKss8_FSsf_X1ZO_jxdwAWtFKSv4JV_8dBUkC584KYpqSUgTV0Mo_wuCOr-UkyCYgLYWVMZLKHCqb2AoO-vF6f6h0XkQHZUC4dmU5b22Goib3NpCj8gshclmnQHaveMDjcYB469OBsVyZqvHNZvl6T9tvICqwzrttUNS_KtUOaWnVE06yXyjh_y-blA2qZ7kjQkN9HxFPSdy01_7AWxb_pKRdked-bVNaZH",
          },
          {
            price: "177244.19999999998",
            link: "https://geizhals.at/redir/AQAAAKZF2KIKFKcuO8HfpHmhJXDKP4vJEH2CfNeezeh9c1MELPDJdLzNkTlqqSxNA9BAtn0f0AgG_qyF6DqAMXVD2uHvL3f2UlZQmMnk7nf1OhlGP9tK6R6O5EMLXiCccpjcqkFhPqfrz8i8JfgdKq6eO2z9JuZ1i0S9R1LJuJ9TMj1I9Sk1yik4y9ii0kslQXQJ7Q",
          },
          {
            price: "177282",
            link: "https://geizhals.at/redir/AQAAAC2b6NlbjlV0oFHY6RuF1u1ywdkK3bJX85psZk5y4VUFrmK-UO2A8XZZfhNydGkvwosUDBlk5WPg_vPlHIrq5pZIDMKSZ2-pmjYSP2AoCoHUWTslK7t7l8GkbFpAUtzM1w",
          },
          {
            price: "177282",
            link: "https://geizhals.at/redir/AQAAAHczII6F0AL5ASPSLXLNSgpW5SwIUxoDWriLdGP-2pw48aiAr1JefxwbuVyJCl6nCV5BDm9hxgPTuw_2Ne90_Z0qu8Xjoswu5CCyhF5VH1eh5TcTudQs-3FQ3DOXIJv3hddPuyjPoDTPUXGvRA66qMmrzoSIVXNRWb-NGbCVlQjLP2kFCd1PfIS-qHUv78eNkknPTQ3GOALeP4qs8TFWznSFWrlqiIxdpgz4_bCTWdk9qe04_yXtmylVrKUsCCzrqRk630mgpCkMX9To6X8DQJDtBXKqlMhTNKQFVFHTRgyoQggEmPD-NmcsCE2R0frgd6YqbRJdgSUuM0xUbVJoLwN_8kok4lFlK7YoKKF7N1ab",
          },
          {
            price: "177282",
            link: "https://geizhals.at/redir/AQAAABtEEiLG-ZqxRDbPAiLM3SDPyWr6NIPZ73IkoskcVlNd1jrCEleavUn_7VoTeQmhmHU3pzkoVVYhde4jZDrfYef5uOUD4CPWqecda6Zb6Sww5qgpVqH81JU1vDSgL7xdW6Ghxe92zVme6QtEeNtSFfCpvSZGWwZVR4HACCt8lLYeaFqouoAzt5pGcH7ezrhhDQODiLZZyND0GuNOeOB5OI5BsaQnqfQY1Cf2GpwD3gD-eviPQTJaQfJ_ceQkYS44_kBu5LtwTmGogsGHROLsjtQLrBnVF3gFU33bQ4yEJjkH3cj6nJQHbfI7xWMB06Si308fJfSOTXGZY74E1i6ZcUc",
          },
          {
            price: "177656.22",
            link: "https://geizhals.at/redir/AQAAANh1cbE3rlC0L6ds7VSkGirPyWr6NIPZ73IkoskcVlNd1jrCEleavUn_7VoTeQmhmBNm5o0wEhpgPIkhBDpl23AkVPZ-LPcOO4IdXu7bOaAvefqzJf9cAHPIBtyYTDqPNEbmyDcl7Me58TmJRJ8C6TF9Q7yL2KQ5kjpnK9s-tTY9dnDNrqasOR08tLd0Tu1UoOcNO0-DKKYX2jVIbBUAFjnhZB4O7P9RwREWSkmuBk2B91u36HeYlzDRT6tt7rVjXXeLy_c86WM797y95OnW_-_Iapmo0b6e53wyI-uQoVOKtlyckG2F-Jf0mr6k2N0hvX7_iymTkDbcxBtUob5wgBOVS4aUS7fh4ndnm7zj2Me2Nbek7fM_P6vRFqbaNnQwk6Nlxnu4tuJea9cqJjK4cZA4zWhxiBr42A2VspmJ3SJ07-akiINjXjZpHDrWn2ZlNETgfOOjF87EFkka33IMFMyBE3S813XksPh-d3kzeQ14AzQ3ZKZ67egf3x7qzliwo-2uft-kUfDqj8fcbD_WbZg85kUf0dSu98qrqgxGkrig_37mHfOJlJYNH13Tuh9hdQ",
          },
          {
            price: "177656.22",
            link: "https://geizhals.at/redir/AQAAAM__Z1CWdyyAW5g_ql8GFDnPyWr6NIPZ73IkoskcVlNd1jrCEleavUn_7VoTeQmhmE-a0s511BRn3sFUsgUkKNFvGNDgHLPMaXdbjq9G67947jzYn2ARC8ZgtFYDovAcgUcCLtimNYqHWxc-zoFGJiN9kEdDBXS4PUvJeHDcejeAZti1pSv3Fh-K-zy4y7HHEA3yK465Nw1SmKE-uTB1zyp8N2fjaTOc30_NvPxLZTQEvgEccnm7jBZSDlh5Ij5w_sPCbi8WW47ud0Yr5hMXDKCtF-AvKkeYPb_knrohN-Dw54kfgohlIiBd2opxFLPGAMJUUmuZIM8nIfVNKw6g6Px0grl5rpuFmHzdyHWu47XqRAQV-Q-LkGD8yfeEfr5Xwk3Yj-x00NAdN5N742wPHJRM0R2u3gkpaWfdMkr2QEksUGQk0kwSoAJs6NdNHrxODQBV-FfOPHp6GUloV4B6DQoWU8KNTqVbsK_R3ilzep5l8Yx6T8-XAmFWGPxEw-ckbhJXEbdg-ym-ccu_-luj87D1KTXKKTjL2KLSSyVBdAnt",
          },
          {
            price: "177656.22",
            link: "https://geizhals.at/redir/AQAAANX3r6prDqiHWhvOkKzyQGGN-Tr8dmwJofnZ4Pz7H6YH_mbkt6FTK-FKTsVaRlhL9yapqUDsEqBGQqeuUFHsjbcU1ZVSn2xqwWMpgacStPLRNlzfeUeVH8-_CM_AftzoSoRKeEpdBiljXqOCyTNULzk3KRDw9ZDgOZr3QZPIPSLsVALf0VJoqIhc8iCIhX2r9oiYUrqbciioJg2usIWNPpSOhzYpbfMctoWK2YhBiQChfqitXb0DzXW0HL5I_qYeViTzG_AqApk4rnGg-S64r5bJy-E_cuT3AUCMtDAiL_Sd1N1jrq_FFSqZ7TUSgxrzfspmo1SFP9dxM5McEG9VomgwZcC8adnwva7OsMbf5v7BhlKPC8lfUPi-U74DNiFUb4EZ9LNu5GdPi1Cm5eC6DjI",
          },
          {
            price: "177656.22",
            link: "https://geizhals.at/redir/AQAAAJ-ybPLJdf-cg-_MhBUsQdkCtgL0IjJH0dW7tZIKs8DpRrONxHGMaBLj0IYApijQ-WMAk3v9X-KWFwbY-95_zaf9pf6It51VVkBkQx9sSkujhTdcaSRdLzKPkTIj28oakTOc5imog3vBbXENC21Inod3n2ol3YEU0FdAwDD6pZm7fKyhLwPbIhs7TwPyrYIEAsQe55xq1FYUlnH45ZRZbVnWr8TB3U0qOzbek7rq-MDM6WHa0Vxcwy7H8nyWM0I8ldmRi6bDWpc6QYzQ9JZeLEDmkpBzqn_NBgNZrT8q49SyQNU_280jDR0vOc11kEH0l5JHJW0qEONMctaq8LT_8LNw7mXIu1W51Cv2tVM7wfk0kOPMBm9hRnYNCWfoY2_XuNZB-Apa1lfy2zNvy0bvK3E",
          },
          {
            price: "178771.32",
            link: "https://geizhals.at/redir/AQAAAAaDjzCfrkkdgamSmljxjDN4NLxMIZIQz3b17maonDreoiYxd6-WZtAXJYv5ZgiwQ2hvjwEQksCUo4jjC6m6UTgh0Tr2SaEj29Yufz45QArq_7ZQsVLPIWXLDJWvL4sEDECaPP6E2frj1br5Y9pDEy8heaeY8F_chlkMi34gmT7OT-0-10bu5UvDrvQ2D1D2aZDjzAZvYUZ2DQln6GNv17hkFu4_pATMeqDf907uuerq",
          },
          {
            price: "188622",
            link: "https://geizhals.at/redir/AQAAAB8v7YclMnfv9k2cK6LVsuQHxd0Df1EYcSAKSwxaEd5Pp4oaPPQ8IcUfP4nfMeuWwcHgJcMU4y2tV0okw8QDfC8pShHw36JQ-tMjS9GU6Mqv",
          },
          {
            price: "188622",
            link: "https://geizhals.at/redir/AQAAABm9IdiMhwrQ3Yq6Sec6JaKo03QV-iMQZvPLt7irurk1a33Fobt3NDiwCioQGDuB3CzwyXS8zZE5aqksTQPQQLYqs7a8v1y2kwbbgjfsAZjlZxZiTTAEubAqFXZtXOYDYupn-0c_wkRRbl5LJkh4AYtboM9m-U13cGVrhH7V4C5b",
          },
          {
            price: "200332.44",
            link: "https://geizhals.at/redir/AQAAAMlcr8WiwOHSx4KL_9iQxdmugJiCQaO59Xx_b0jvk_WDXqtK81Epe76miNRZAiWsK2HVDuJQvareU-HIvc1P5DE6jFs015MtukqTwrZEoI8jjEPUK0T1pWQRWETvOfs-92C7fB-GnVGdfjt1n8Urkv0VcrB2rteWgoskFHCCbTn31d5hGl5zt6ygnVE2EtQJzl_-Uwrf6MLCczakIueIBLo",
          },
          {
            price: "201375.72",
            link: "https://geizhals.at/redir/AQAAAM55JsPKnWQjILUmFFqoWIRUyo_mx6CfO09lIBvQMwMXFQhBDkifyzjjZr8diBLlQ4LwBEV9SzNj-f9TBlUX28YZUsfIegJ16Kw2U4MoJ1Eg7chwqOR6DjtRUDqPfzaZN1zTjmkptNtcj8r3MiPTIg0-Pyy_J4EU2npooCH4lE7kHUGuAO3NngmkHc4x_TRknS-SyjASyDUOPNla8BsV9YgWCYXNt9qIX1jvuVe7yVx7FXKwdq7XloKLJBRwgm059yVJwsbqdj3EIbNbWoWrQhVf_lMK3-jCwnM2pCLniAS6",
          },
          {
            price: "203742",
            link: "https://geizhals.at/redir/AQAAAD4V9XoIHvR_ReY1oL8UI0lmBq7tPZsFGouFyEN2FQSvqAwyqaBeauy6TDVW0SKoJZiGY1MS1GvV3cKTvtwcBGIWtoCqe0Fpd8h_EFRxmGXRYrxGeYB6_xou6KJNGLWLC_eAXFcr45MfsEsZQcQwtgHXItcLAP3TIaF_vkIgEEDL7WwbMx75kh2pkcPjvst56paEbBwabshZI17snJ6wamUc-Be_AmyFP7DOx9ZN7JUFKyXMVUQbJ6XA-N5tMo6_3HgR9wrSA17lFspRIKL6-GhOfHaO6tQhrwrm-RvOmhjmTr7npaEYob6yvq8380yoL2qBYw_S1WgkibsCwi12Hfo",
          },
          {
            price: "204891.12",
            link: "https://geizhals.at/redir/AQAAAIprbOLUDk9HMKD42dcNXFhmBq7tPZsFGouFyEN2FQSvqAwyqaBeauy6TDVW0SKoJU2XTv3rnstqqKCx-Os8Tzd0gPcxytC2rt2h-rQS9TiyxUD9R1MZW9WHsU0zyX2tEb2ZVnTZ6XWycz_xRjXkJ3QajrXdQ-98wVudsLfNF0onY40g1TuAjBmzlDRumihUCeMtmpRnWqBIQ3ubg0yy3nvzL7rpWP9NEOKrHXbvJRhWv13f71IagWJQwPz4g7Bq0x4jSxXJvbNhErdwm-cVVFdC27Pth8_qBQNPyiiOPiHuOoiIphYMvwyWFEB1136zoQ",
          },
          {
            price: "205250.22",
            link: "https://geizhals.at/redir/AQAAAEx7rDPqLA-O1T0bPKdNuIhP6ZZZuZLp0C2hjvdZGQhZwcwlXbkcQHsGEz9rfJqRJ1tBkvIl0Z2UtfJNoMHYfoTnRdAavtorni19UDbcOTyvfWwKQgLjQBCLdidZgzUCQ7LRX0AkKnekpq38ygKFtF2ACrM2FGBNS_2lIpBCab5xh4j3RWYFsJstj3SHWdw8hOUNQaZwKLOKx8tj66edrFlhZ6X2vAHQvXO1b7p3Kcs90qIvz5OgQySD6M4BfzrnUfmD02mgfMljW12p1yPquO4",
          },
          {
            price: "207140.22",
            link: "https://geizhals.at/redir/AQAAAJWAE2tgFC9FDndj_IPxjmOvt62kUHUVezpzpHtggn51QYGA8MG6xUHblRjaDmnZSilCNGpNBszoHQfczTNjzrqhr1UeE4yyQzyDrb7qtPwqVI3duTpMmkENv_M-N-5fS7SzFWij7ZWuUPX-cmPuEHF8zCBqGH6hcmELfXfAgFGF_hEJBMDfaXTXi1sC-sCB7o9bmSOgc0NDfqJDIPBAJl-M5I6vQBEKaYUEYlumYb21M9KeDkQDegkMIwIxKaBTwPe_1gNxKrFodvXf_vK_RjBGwZUNKJCMCtvGJI_-0jsoPOZFH9HUrvfKq6oMRpK4oCEallDlhKIW1u9yPLqnbCs",
          },
          {
            price: "207522",
            link: "https://geizhals.at/redir/AQAAAELJY7zYXcRLuRZOWeHepyuwo3yzXp0j2oZ_z3wkfqid3q3-xzK1AO6_JRlAD0Iq42py_rWvXAe-wQ2RvmekQGaY27x1US80B7gNJbpRJ4kPQtuz7YfP6gUDT8oojj4h7sQc7HfJRurGHOlhryDZZlM",
          },
          {
            price: "207896.22",
            link: "https://geizhals.at/redir/AQAAAJlNSoqxYcsV9y66rbPj5R_PyWr6NIPZ73IkoskcVlNd1jrCEleavUn_7VoTeQmhmMYSWEnMzNDTSK0oxImNYIX5uOUD4CPWqecda6Zb6Sww5qgpVqH81JU1vDSgL7xdW6Ghxe92zVme6QtEeNtSFfCpvSZGWwZVR4HACCt8lLYeZPd4Q8cJGypM_669-I5GDmJ5ZzKE9mfmZE2GGQlAFTVgociOeRxRHEC7-1wy0-gsOqdqKtjZlPgm-YHdtRKcjb0tYnisa3rAZWBIsmlf5iVWLW_EoHHKCkqj9EMxQ6hGhlKPC8lfUPi-U74DNiFUbxLFZOZLY4KPGerkFT5IqQ8",
          },
          {
            price: "208134.36000000002",
            link: "https://geizhals.at/redir/AQAAALs0pvRwiMip98QnG9kHNYO0byABGBwj5fwwUHChFhkE2Fu3yM29ZPesvTDDfJqxFxLFE0XlJ1Sp3f8xkTVnxXOl_iFZTJEaotxRRlb4Y6lLyYKZPfEJWa0QSbYESr2ZrblA2qZ7kjQkN9HxFPSdy0011hwh2NxpiogNmfqbE7vG",
          },
          {
            price: "211302",
            link: "https://geizhals.at/redir/AQAAAE-QqllWIOAPuH6RbHpb72gp6RYnmniK-bOKof8KyVEg0zLeF9ZReLr3_TYG8d4RvLHpo8BV_63LK2GqJKWapEhxFxTDo7rvhUFXALC7V9KoSAzCkmdvqZo2Ej9gKAqB1CvRkmifmFY39PDcYCr7gBg",
          },
          {
            price: "211302",
            link: "https://geizhals.at/redir/AQAAAJt4tY5POS5jBoKV7vq8qTx0MEe78xUrrqqvstJ7vySuypQM6aNNWY_FJQKgqkeihorQM_nRmE48_dwgeysUR23kF4HUKw0NRCj580BQCFo6tgrjOj1t2Zvfn-qSd6q1v4DTeJwbb1WdTjSTy_wA3JI",
          },
          {
            price: "211302",
            link: "https://geizhals.at/redir/AQAAAHi9B9XHVBTpD8h9b8IP5xC3Ikd4zYNenx7Aks3y8Oq0qVH1EOoPYLaikSPHkcUvDOAmi76gRt4o-y6eQN-cZNKmrsUtOmgdTNZeje_RcQt2Y3IQeU-Lu1mBkxjtlRpo8LCzwLjjPaIf3FUbHxyEEKfV3bT85cb-CJsNkGOE6gybze1tc1E9nyxBUx2e4PTzKEnsHTHnCl-JvZXXged6NhckQJB2EDjKhXI1Ba9zwJ2FzlVrhzIj3w-vOqXC-LtcMIZWMp5BzL-WTmjpHecI5V-Q48wGb2FGdg0JZ-hjb9e4OaW0aD8PvWMTfV-PCqejdg",
          },
          {
            price: "215074.44",
            link: "https://geizhals.at/redir/AQAAAJb7v_z8V6PM075G9lea-aFRMtBknvpRZCJi3M9l8ovRiPAt7XAhYynsWEZFcL-cIOSsaIHpFPzwcvoT9W8I0q3mYpSWUz5pqx0-1CtnHPeDcLInX0GlBW3-IFSAfkWWzElCHDI9WkIxYBn8X89QeAZRFlRACRNPbfybEg6Q0eBlrWvAjPCtL0ZaazNixQf0xA",
          },
          {
            price: "225325.80000000002",
            link: "https://geizhals.at/redir/AQAAANHEf3MOOeSpkDBD0QT2LVx0FFGd5LimYJnnlx8TeKYjWhx9A8VDP7t46aLSRxt1OA4PLmilXiEwQZlrycExg9X14mhL6M_OYYqf_y93thacSAzCkmdvqZo2Ej9gKAqB1D8Tsla7EoGj58TgsPd4fB4",
          },
          {
            price: "225760.5",
            link: "https://geizhals.at/redir/AQAAAOUupdFvfRrkWZBVAhSGB1zJoUvh4nqEYekLTsHcJu5ZtRR8wNiIEME3TK0RtXQqk0NNsf5_GH9PKTKMP7GUFzatOEJIi3RAKx6pwP6J_Ns6nDZ461-8Fi4q4fvASk48FbbWsZsDmj2kOWIXiJiVGrWRwLefD5i2Uu1gif_Klps-C8Zb-GwB00-K9oBMCY1WGN8WZ_ZgzQFbAK88EvOwujTJJuqmcuKigO5VxG0lOe7vFXKwdq7XloKLJBRwgm0599imzRxLS0E_IaIrEY1nvPlf_lMK3-jCwnM2pCLniAS6",
          },
          {
            price: "226422",
            link: "https://geizhals.at/redir/AQAAAPLBfeNrz6HV1T5yP_uAj0bPmsV14lIgx-vWCh_xqWPfjF5DofFvsbLWF__qqZduacE9LArgIkNfbokgIGtyRYsv6-x07jU6QUotbZ-OdcqA14rHlPJOiX6iQNUyIqbxfkl_2M1M_PnTlRPb-ospP8-Q48wGb2FGdg0JZ-hjb9e4RhRN7LgkbgEXLbC0VvJK2Q",
          },
          {
            price: "233074.80000000002",
            link: "https://geizhals.at/redir/AQAAAJ7J0zhFWwwHjOrS6UxmQOCWWCIcIzNfuXGmanDCjUAgTO0jnZkE1r5xvLJv6RyNaVJ5L8i4gfP0wPp46D_KQ-YEEzcQ3YG2TCutd61tAdj-XYDLQiOaGr2nf1zAtkWL8tvqg7UKnFretRk7hhQYX4x_7SYaFCEa_cT3djCnKHTn",
          },
          {
            price: "235116",
            link: "https://geizhals.at/redir/AQAAAPXsaVy1A6dkqnKS05xVzqWWWCIcIzNfuXGmanDCjUAgyqHrcApg10Ndq6vu4Sh0p3vFCxAxEu41lYEYEEOxuzj6bSrfOMccMEEhKg8LSKo9Bokny4kppWzbaiEhCZpHBlkApj5NH7KfW_jBZAf0qJLqZ_tHP8JEUW5eSyZIeAGLliTrGOG-a5EX7OpXQwc-8Q",
          },
        ],
        picture_url: "https://gzhls.at/i/91/16/3039116-n0.jpg?ogircp",
      },
      {
        item: "Sony PlayStation 5 Slim Digital Edition - 1TB",
        prices: [
          {
            price: "169306.19999999998",
            link: "https://geizhals.at/redir/AQAAAAEZwOwzBjo-OjRFtMEi2o8Ci6kuvRhQWPeUMlwZ399aRhNd-qLylVzymWDqYgbrhX24JWEJmonh85ALaP5-Znt8PUUdJi10_g00R1UueMc8jCMCh0FoctCklSgEATHSqjLu2eSGs6tu_XyzxFUMQw7pinug7eBHgq_erVZzgAvEKS0Kjdv9ieLivjY6WG9egP6mawA_Z4LYTrFsmlWHD_rRnDeUWLfwJUrzHnrurDHiVB-Ljf_MUFWlnc3KbOAqCVm6IlG0xv2Dj4hgrVf3rqEJ2joCv2lodjLOzY2pDaaUFzYwVTijeYw5J34PXWl4FQ",
          },
          {
            price: "169722",
            link: "https://geizhals.at/redir/AQAAAA8d7D9p6JaFfBmZy4ZRAOnPyWr6NIPZ73IkoskcVlNd1jrCEleavUn_7VoTeQmhmHU3pzkoVVYhde4jZDrfYef5uOUD4CPWqecda6Zb6Sww5qgpVqH81JU1vDSgL7xdW6Ghxe92zVme6QtEeNtSFfCpvSZGWwZVR4HACCt8lLYeaFqouoAzt5pGcH7ezrhhDQODiLZZyND0GuNOeOB5OI5BsaQnqfQY1Cf2GpwD3gD-EX_9wTVB2ULBCGQzWOpqppo2tp9qoU4Wf2s-kmiFz9CRAF0qndmVfJwPii4Y8JDND4rJ4oECptY1EnEh6OuIdvgLNnBlOTU7TiaXgDNrOj--BTSGF-XBji4wU8Q7vkx3",
          },
          {
            price: "170096.22",
            link: "https://geizhals.at/redir/AQAAACJQ27-8ReZkNe9RTW-hjJ9Uyo_mx6CfO09lIBvQMwMXk1i_I9_nrurljjWHer_qe9_YiLSN46-EMSn5cZ5hOOmYbQxgl5CQdr1WAd7YYvnxz6cMYNnVhOXP36afd9rqmPbFMG5uOQmUrRggVhCxVc_aYcpBuX94mlk04YFT6Qv74HKgBTDdWHPo9yNTfSb4WdxLI10ypfLnbiuG85BK7iOjuZ38YPEGuMNFbmsvqzct8WuYNmQhHSafcSGaz86ca3bpKY4E3zKowLBD9ZFWpts",
          },
          {
            price: "170096.22",
            link: "https://geizhals.at/redir/AQAAAIzElEryfyP3Gypp3gi_LGVW5SwIUxoDWriLdGP-2pw48aiAr1JefxwbuVyJCl6nCV5BDm9hxgPTuw_2Ne90_Z33rP2P_dGOctUbB5rd17Uzm_3e0rg2WjXOund7qSQQFPnuwrc3m7YxQXRYpwoK209648xARhfrKzYzrMb4wQLzem43nE5Oa1EODbomOGHPe5rrRy2-dmgAEDWj_RSNlLRzweoMXMrTXi4twbbw7sSFqi96ePAvEkDmR3kFyF4B6OyuhXnGQoIPGWxwVtWvECUrwEPeUrouKQ8r5McaLye6L75NgAierWuEmqF_nTRJTBcZg1PJJt-YS6zxrwY_pmljqvB5zoGCZDcFodz-nhtP",
          },
          {
            price: "171525.06",
            link: "https://geizhals.at/redir/AQAAAAaDjzCfrkkdgamSmljxjDM0z4h9c9uej6L-iTqoua1KoiYxd6-WZtAXJYv5ZgiwQ2hvjwEQksCUo4jjC6m6UTgh0Tr2SaEj29Yufz45QArq_7ZQsVLPIWXLDJWvL4sEDMjsNFpfDFxbolpw2C0NHpfVOVs4I1aQtcxQchYLx_21vFXQVWGaE4Tb9JUo5uSn45DjzAZvYUZ2DQln6GNv17hkex5YqCKOvanb8pxk5FA_",
          },
          {
            price: "197977.5",
            link: "https://geizhals.at/redir/AQAAAFEKhllA2Z0c1zS7_3Mo2AkHRUNT72r6V9DTCjRb92oQs-tRXAhx-kFyZuZArNz_e6SFUtIJpC6z6ZtfWeUjLx_QD-ENkdTgKuRrxJ0GqliAGB0d4j0M8cJ-i330ue6eBdpuTiyyXTwKlnw8VDLza5g",
          },
          {
            price: "200336.22",
            link: "https://geizhals.at/redir/AQAAAIx6OTilxlLjEezxmQQMQRBP6ZZZuZLp0C2hjvdZGQhZwcwlXbkcQHsGEz9rfJqRJ5qDwyMWxaAmDTGMse7BGm8XLZCzRUpHogijrkUIz9R088uvaM8n0ot2mRYQACqPsfNBmWpr-CZSkaR3SdmLvdbA3YZDfVXiXwWP2-as_yL6_ZKbWs5UzgWzKRRGfTOKguZMPhyyTp51Wn2EEJ1XgPtaHzwj_RTstWGiZWW_uhDlkOPMBm9hRnYNCWfoY2_XuDqX0qsFsnjDgqh0b2TVeRo",
          },
          {
            price: "206365.32",
            link: "https://geizhals.at/redir/AQAAALY8eruWY4Z4mraG3Sv6hXSWWCIcIzNfuXGmanDCjUAgRPqn2rB4xZPQaKm23p2DJOV029u0zU0LyNqrpZ5PY4Eu8qKPTXQ6K5okaHXkOzfePHCwEDMygDw-xFIJFNtXCEvwoTdGO7U7i7bATmN1MyIRoGOUXRckPI_p-CnzGWWH",
          },
          {
            price: "216064.80000000002",
            link: "https://geizhals.at/redir/AQAAAEGl6TCN8eukuFqZQ1-MFN6WWCIcIzNfuXGmanDCjUAgyqHrcApg10Ndq6vu4Sh0p7Rl2JHPjkf23eFDM8cBp3aIzR8xKXuBN7ZNQXzX1mrIgWvi1Zpa1tbNR9rqMLUuRgeXH2MNGvO4krUNFWEWIn885kUf0dSu98qrqgxGkrigfh1mDdyR6hnVLZQ-7_oDtw",
          },
          {
            price: "216885.06",
            link: "https://geizhals.at/redir/AQAAAMJu65VhNOEe3jTd8b8sVoqWWCIcIzNfuXGmanDCjUAgyqHrcApg10Ndq6vu4Sh0p46H0sY438M_yiF_Jw1XK9ya3hgv5Snc-kTltjGabf_SXC6-DU-zZF99doPGCBqtv3cnN2KGJuj147o3obAFtbbxa5g2ZCEdJp9xIZrPzpxrsPAMYvBPyhgqV9vXga8CdA",
          },
          {
            price: "236896.38",
            link: "https://geizhals.at/redir/AQAAAMBX47RySPbUK9PloNI_EqyWWCIcIzNfuXGmanDCjUAgdpDzICWELuWNoCb-du6lX1RyIkUHqPG3is5eEJbvMwFYAMOk0BsPQrb4UVZZo_S9EKIJWn8vjZZ3uzVKIhikZgMx8DMDAbUnqzN2aq8CJGzXa_v5GJ9LkjKlZRoA0Ghk",
          },
          {
            price: "446637.24",
            link: "https://geizhals.at/redir/AQAAAAaDjzCfrkkdgamSmljxjDMHtFGLmnGK7eD3V2J_nXUPoiYxd6-WZtAXJYv5ZgiwQ2hvjwEQksCUo4jjC6m6UTgh0Tr2SaEj29Yufz45QArq_7ZQsVLPIWXLDJWvL4sEDNnpybi1K84m956qwTb6a_j4inS3leS-ec2ZIlqSagh3vFXQVWGaE4Tb9JUo5uSn45DjzAZvYUZ2DQln6GNv17jAYqRw2rKHieTrylk2ZFYo",
          },
        ],
        picture_url: "https://gzhls.at/i/91/42/3039142-n0.jpg?ogircp",
      },
      {
        item: "Sony PlayStation 5 Slim Digital Edition - 1TB",
        prices: [
          {
            price: "190761.48",
            link: "https://geizhals.at/redir/AQAAAMxEublISoVbV9w-mY6OE4lmBq7tPZsFGouFyEN2FQSvqAwyqaBeauy6TDVW0SKoJbIgb0SykjrXJ-Y1WdHVFYhGotGljZOnHYTSGdnzC8jTkH8_QFCF7cDNpizqgh6DKFXVf9ZnPvUMfkcy2aNRgYLu2fbL2HvwCdsCFDQ1wJOONeB6Q4okFuyHF3tDhuRxaQBNiWjMqIyHsJJuxiQ73dHF5kuIirjGCOkKnw9MeMBwFlOWdyQWFNHIUYwOV-h_4NONvVCbVa7_g87dfrdVTEeLI7fs3jNLDEl_iR4Zjo249_ZscTX2S_XsFfjh3V1Eg1m6IlG0xv2Dj4hgrVf3rqGomnRTP5QFhf-Pv6-tSaQw",
          },
          {
            price: "196182",
            link: "https://geizhals.at/redir/AQAAALChkSnOfAeQ1tBiWCD3Lj5W5SwIUxoDWriLdGP-2pw48aiAr1JefxwbuVyJCl6nCYQwfokLCAGCMsBAjQ0TdQOmjMWYE4syMJA03734WgtT5hKxy-yoBGK-oC6NSXy--kqvWai8KZ_p7LhFoidU_3h-8pKcfFl0nmtg0AbAtYZZhqm-X6dJhAZ8akBaJ-wWfFtP63_u14NAReQJ9bQ7qutcUW4nLor9B8aMnYAXfWwKf1tXsk9ONkkSBzrThnOYDkh36pIADLj6M4lxu6LNEnZtayhE57ox0MYkDVuyT0zZqAZb50Z9MObsMGcAiCTR_G8k717erkdY0C0l9NW5sTy1mA2cRMnHcA2vcdHk5S4JzrknD6wIPWAPotTInSSaL80JWzGJTsqDwxMMf1MNJpqLyAmfYbiYZDLiTBi_AXY2",
          },
          {
            price: "198208.08000000002",
            link: "https://geizhals.at/redir/AQAAAAaDjzCfrkkdgamSmljxjDOtaa7q2L2cce-UwEQe-TP9oiYxd6-WZtAXJYv5ZgiwQ2hvjwEQksCUo4jjC6m6UTgh0Tr2SaEj29Yufz45QArq_7ZQsVLPIWXLDJWvL4sEDMJcFYrAlYASAl5A9MYMXY_mMfj4Axk3ejQWR779AiaVvFXQVWGaE4Tb9JUo5uSn45DjzAZvYUZ2DQln6GNv17jpk9xoO4EbUHKhHqyhFDlE",
          },
          {
            price: "198450",
            link: "https://geizhals.at/redir/AQAAAAF_hmE66rKOsBsAVtXxPlzWj74qshoKa4ifaOEJtlhQlr5HEN9_9ES273xx_nQKvMy2iudntJiX-YFVMcyuvda4__9RN8aUM8CF2hDYgCJJiKE5oxzXOsh9yySey5w_HMU38LaU-oSH44R9Q2JnV7jETP27BP30NwGnLby1SfySiKN6L7fj9udxoxaNHjltOIVrvGmiyshw2GYRJS0He3obpvSzNtbUca3S0iUBmLiVX2bkK_Qp31wbMpsZC-0zH_V03AQN_szd5OeccAW8tao",
          },
          {
            price: "228690",
            link: "https://geizhals.at/redir/AQAAAIsYi37eGcOvb32z4ZQcQI2WWCIcIzNfuXGmanDCjUAgH0iGnpl2PJlbJq3ujH6LgEYTXfqi8pVc8plg6mIG64Xsyvaok_SpBhk0ywqllyXyFVod_TIegGJmzcFYN2EutM0JWzGJTsqDwxMMf1MNJprzgg86uHMajC-iGXvQJiVd",
          },
        ],
        picture_url: "https://gzhls.at/i/59/64/3125964-n0.webp?ogircp",
      },
      {
        item: "Sony PlayStation 5 Slim Digital Edition - 1TB",
        prices: [],
        picture_url: "https://gzhls.at/i/91/50/3039150-n0.jpg?ogircp",
      },
      {
        item: "Sony PlayStation 5 Slim - 1TB weiß (verschiedene Bundles)",
        prices: [],
        picture_url: "https://gzhls.at/i/91/40/3039140-n0.jpg?ogircp",
      },
      {
        item: "Sony PlayStation 5 Slim - 1TB inkl. 2 Controller weiß (1000042051)",
        prices: [
          {
            price: "199168.19999999998",
            link: "https://geizhals.at/redir/AQAAAHSDgU4utGtbFYsENlaX4JcCi6kuvRhQWPeUMlwZ399a3m86vcRw8Y-6iczTrAAzSGwTlhp1_xKa3y8muyh6xpct4xL5olrWhdT_iXYu21nKTjQTyrMNrnK_h7rAxEznEBLbXie8hStza3GmUAybyHro6piTqJ08JcC8nnKHfadmjUE-AgaqV3ScyKQaUyz8phOupfAO3tTEHqaywCu8OIBfC3KRBe1pR6HwK1qiqz9LB5g-nFIib8ccs3hy1RnvDBkx2LNZ-uYgWbb_DPWZQrlCCASY8P42ZywITZHR-uB3OA1F4vK1VhYxdlc4byFmtn_ySiTiUWUrtigooXs3Vps",
          },
          {
            price: "199962",
            link: "https://geizhals.at/redir/AQAAAHRc-_oM7Jh0sCRUqwiH799W5SwIUxoDWriLdGP-2pw48aiAr1JefxwbuVyJCl6nCYQwfokLCAGCMsBAjQ0TdQNaRRd56AGbMwxP0hLI6-0Phtd7eXmJoF-8Or4qxKABHY4xPRLYoB6eDx6lLR37fn7BK2haz2mp83RI9jBEyCaL4TGeSXkkCBk-gVq2XKGxLhvM0xg-XrmeInpLawvQ10lVgDyz4PQs467-cPwDQzBUYf_SM31QMds4SvDqdvL5D73nW88PMgMQYDsiR3A2sq8pU_G7fagIi_CDNHbLAAKYnfPh3HjE-ynY1r7SjTpTIIZSjwvJX1D4vlO-AzYhVG9sLcrZDiMlyS7rb8jyjg0m",
          },
          {
            price: "199962",
            link: "https://geizhals.at/redir/AQAAAP3RYkRtSvQCvW1i3l3xL7pRFAcghnfuEey44i1hEzxf2KJaf0DsfvEg6T9zId_csfxdgMziDRY23dUElRdQaoyN4gr_R6yookCJougyjemVQihrSZ31PrmJsBQRwWyI2NYAMxBqnqEx4gUu1mGn26q2CuM6PW3Zm9-f6pJ3qrW_CnfO1dv6-L_6At7Gg1_m4Q",
          },
          {
            price: "199962",
            link: "https://geizhals.at/redir/AQAAACE-7ErGvlbyo9M20nJcLk_PyWr6NIPZ73IkoskcVlNd1jrCEleavUn_7VoTeQmhmHU3pzkoVVYhde4jZDrfYef5uOUD4CPWqecda6Zb6Sww5qgpVqH81JU1vDSgL7xdW6Ghxe92zVme6QtEeNtSFfCpvSZGWwZVR4HACCt8lLYeaFqouoAzt5pGcH7ezrhhDQODiLZZyND0GuNOeOB5OI5BsaQnqfQY1Cf2GpwD3gD-mUrrBFyFS5lL40jos-AnIjWBObmJYKvI_0yErBBG8DVJHtW3ufWeAa9AD5RG9ipJ-rlFYrJC_HIYuyz0BTs1Yl-Mz8zZpR1p9gGrRUynv-KGUo8LyV9Q-L5TvgM2IVRvbC3K2Q4jJcku62_I8o4NJg",
          },
          {
            price: "200336.22",
            link: "https://geizhals.at/redir/AQAAAEU5ezY4S4a9dnyQFuEb-o3PyWr6NIPZ73IkoskcVlNd1jrCEleavUn_7VoTeQmhmBNm5o0wEhpgPIkhBDpl23AkVPZ-LPcOO4IdXu7bOaAvefqzJf9cAHPIBtyYTDqPNEbmyDcl7Me58TmJRJ8C6TF9Q7yL2KQ5kjpnK9s-tTY9dnDNrqasOR08tLd0Tu1UoOcNO0-DKKYX2jVIbBUAFjnhZB4O7P9RwREWSkmuBk2B91u36HeYlzDRT6tt7rVjXZvc8UzEcRFflBkxpwOGvNPVSKyxzXyhBXawuXNb36VD65jI-wQfq1XDudHdRf7rjy7-ZvUO-8UanL5MBHDnJwHATgMYkzrAgNHXlhToC4E48DYygrf9WbV8NtzT6YgbQhENbciSmILI-tYWOTZBR5IhOocSjyR6Sf1URPsoFnW0CroDHRzrfd7fhGtOEwWJE1kOwhiW24bcR_tmm0SdCjmHxpIK3kGy-E94hDj5kokaHQ-8Z5jbZ9GoPu7xFsxLblz09ZEUvOGFnn2y2E4CV0KfVEXlgkRY7DZbg5BRJMaXTw3xs9EczSOf4xkcfGACUxc2MFU4o3mMOSd-D11peBU",
          },
          {
            price: "200336.22",
            link: "https://geizhals.at/redir/AQAAAEInnWcIWh0QrjW3q-BhXt_PyWr6NIPZ73IkoskcVlNd1jrCEleavUn_7VoTeQmhmE-a0s511BRn3sFUsgUkKNFvGNDgHLPMaXdbjq9G67947jzYn2ARC8ZgtFYDovAcgUcCLtimNYqHWxc-zoFGJiN9kEdDBXS4PUvJeHDcejeAZti1pSv3Fh-K-zy4y7HHEA3yK465Nw1SmKE-uTB1zyp8N2fjaTOc30_NvPxLZTQEdyLnmFFL6E6Q10JJUJze0Vzp8gzaYqBbms6HgrqJHy0L2RDfJ9dxRtyOYcLl0TnvebT0fnmUDi7XGApg60u9tVnu0_WCv_Ye5UJbZBeNZTcmf19Cn5nwcOgpej2tubeY0VAJWSPDQAgzCdzMKVeAu6zzZXMj1PJiwnCGbCli6O8OjSdT20SzbggMJQro8mpl1hSbXUpOISchSMoAaXuhO8GJsBZ4-lm8WM4ueTo8lotlJBdG94oH88BCug7aYk_T6HwkTGRONWDbDMUqgW49OyQ6rsPQf_kGJOHmbDCO9cs-C-ybi9PaxfHd4TdjNroO",
          },
          {
            price: "200336.22",
            link: "https://geizhals.at/redir/AQAAANX3r6prDqiHWhvOkKzyQGHYDC7kpxId9dA7zYkmtUze_mbkt6FTK-FKTsVaRlhL9yapqUDsEqBGQqeuUFHsjbcU1ZVSn2xqwWMpgacStPLRNlzfeUeVH8-_CM_AftzoSoRKeEpdBiljXqOCyTNULzk3KRDw9ZDgOZr3QZPIPSLsVALf0VJoqIhc8iCIhX2r9oiYUrqbciioJg2usIWNPpSOhzYpbfMctoWK2YhBiQChfqitXb0DzXW0HL5I_qYeViTzG_AqApk4rnGg-S64r5bJy-E_cuT3AUCMtDAiL_Sd1N1jrq_FFSqZ7TUSgxrzfspmo1SFP9dxM5McEG9VomgwZcC8adnwva7OsMbf5v7BhlKPC8lfUPi-U74DNiFUbxjRYXahREWb8NdBvyK_7OU",
          },
          {
            price: "200336.22",
            link: "https://geizhals.at/redir/AQAAAJ-ybPLJdf-cg-_MhBUsQdkBjf2labR7gsEQ6ba_qzVIz8K4InxXkiCw0Qt5vsTb12MAk3v9X-KWFwbY-95_zaf9pf6It51VVkBkQx9sSkujhTdcaSRdLzKPkTIj28oakTOc5imog3vBbXENC21Inod3n2ol3YEU0FdAwDD6pZm7fKyhLwPbIhs7TwPyrYIEAsQe55xq1FYUlnH45ZRZbVnWr8TB3U0qOzbek7rq-MDM6WHa0Vxcwy7H8nyWM0I8ldmRi6bDWpc6QYzQ9JZeLEDmkpBzqn_NBgNZrT8q49SyQNU_280jDR0vOc11kEH0lw_e4TGWZ-dWMbqae3bWyO5w7mXIu1W51Cv2tVM7wfk0kOPMBm9hRnYNCWfoY2_XuL7RFQwEn_51Wov1jaicoik",
          },
          {
            price: "223012.44",
            link: "https://geizhals.at/redir/AQAAAEX5aMctyX9Nqt3HmeuQGFGugJiCQaO59Xx_b0jvk_WDXqtK81Epe76miNRZAiWsK2HVDuJQvareU-HIvc1P5DE6jFs015MtukqTwrZEoI8jdbyYp3R4EH3-uWQfjWV2Fzin7cvIJtDdR7CjK2vs-VY8Vh5BS-gEL-7p4sdElTVtXJ_wKALAJZFKap_xYiYwsLzrWcw_9av-ilbBkrxyY8F_8kok4lFlK7YoKKF7N1ab",
          },
          {
            price: "226796.22",
            link: "https://geizhals.at/redir/AQAAAG8ENlQiJz0SdTFz9X9tVlHPyWr6NIPZ73IkoskcVlNd1jrCEleavUn_7VoTeQmhmMYSWEnMzNDTSK0oxImNYIX5uOUD4CPWqecda6Zb6Sww5qgpVqH81JU1vDSgL7xdW6Ghxe92zVme6QtEeNtSFfCpvSZGWwZVR4HACCt8lLYeZPd4Q8cJGypM_669-I5GDmJ5ZzKE9mfmZE2GGQlAFTVgociOeRxRHEC7-1wy0-gsOqdqKtjZlPgm-YHdtRKcjQuSNGaks_NGwW4JkgWUiO1gRKi10bvlZvwdSxFMvBWQoBl7qUB97fUitsa4nmnLIZs2f5PmFedkcyVJnzUwO3aQ48wGb2FGdg0JZ-hjb9e42gFa5lSCG5TcGY8n8GtEOA",
          },
          {
            price: "228058.74000000002",
            link: "https://geizhals.at/redir/AQAAAOm0GnEr3RzPIe30MlNqIRJmBq7tPZsFGouFyEN2FQSvqAwyqaBeauy6TDVW0SKoJf855RBMnobX2ctjODR9lBnniUYYeXmeuVZwjaBz1xFCysDScEVjCptgA4yi04Pbuwvhit_uNxxoVzu8ea3Onqmt4grtZTNUaUJv7YdjLsdTXEhBjgCWgxF6Dz41ttcqGgJuHjzHVIhJ1BN0LDmijc9DU-yDlvV3yjPkDaSHfXvRPvegOgH6c0H1EeGB_oBYrlxRbicuiv0HxoydgBd9bApryt0JeadenKTLfQ5sTX8VidrT3qeejjInwBll5qkXtoZSjwvJX1D4vlO-AzYhVG9BSHm7M0nsiqmkAaV3akHM",
          },
          {
            price: "228312",
            link: "https://geizhals.at/redir/AQAAAHi9B9XHVBTpD8h9b8IP5xC3Ikd4zYNenx7Aks3y8Oq0qVH1EOoPYLaikSPHkcUvDOAmi76gRt4o-y6eQN-cZNLHgzrRK9C4hjk7eB-n27Jw2Z2fnBYdGj9wcjpZaM5PsPKn0NiYppBMoLWV898aYALV3bT85cb-CJsNkGOE6gybze1tc1E9nyxBUx2e4PTzKEnsHTHnCl-JvZXXged6NhckQJB2EDjKhXI1Ba9zwJ2FOT-HSTemeInFm3i1HcJEe4ZWMp5BzL-WTmjpHecI5V-Q48wGb2FGdg0JZ-hjb9e4BB2s4fLAdQ-RbweIGHyajg",
          },
          {
            price: "235834.19999999998",
            link: "https://geizhals.at/redir/AQAAAJt4tY5POS5jBoKV7vq8qTx0MEe78xUrrqqvstJ7vySuVoH_hVRirJMXYbMvh-DsPYrQM_nRmE48_dwgeysUR23kF4HUKw0NRCj580BQCFo6tgrjOj1t2Zvfn-qSd6q1v_TVxg8Pa3ubGjnqbCXEOU0",
          },
          {
            price: "237418.02000000002",
            link: "https://geizhals.at/redir/AQAAALY8eruWY4Z4mraG3Sv6hXSWWCIcIzNfuXGmanDCjUAgSssQ1sRsW-SRCPPbdxjexI3qYafULk_MpA-Ytv9u9b7k04x_MzrXmd6SeINUYwMoP12MYvKfsEvatNJH49AopNAd1pALfwQbnUh280qCn5vYzDvW2rTJJTrnczX66rB2",
          },
          {
            price: "245322",
            link: "https://geizhals.at/redir/AQAAADy89AIycj_57DXkFQ059P5iZ1bj8f_7rGTG5pNEzB8KWErQLODmForXo2AeYiUXsuMtmpRnWqBIQ3ubg0yy3nsVMbpPxGcBkbJs-FGWnXic8_LcpCqPAaoSxwrP-6WlpZwibnOzQnPT2ww6XgXtDCCJDg-7ak8VUwHuMdQv5Yy5OKVXwc_BW8YupBMiEAh9UZDjzAZvYUZ2DQln6GNv17iDVogUmsNI4b3h0a0Joxmf",
          },
          {
            price: "250209.53999999998",
            link: "https://geizhals.at/redir/AQAAAMBX47RySPbUK9PloNI_EqyWWCIcIzNfuXGmanDCjUAgYen0wS1eRrvEYlr9DoPgWnM8PUecu3xaVjwZI-ASOPC6oNdrXEDx_lcdQERLchwRk13xvv3qW6IAQ46X8JG-YqiTc8UQJflh6ZnQ_Ie3ld3vxxIg6r2tJMUTYJK3wtk8",
          },
          {
            price: "268357.32",
            link: "https://geizhals.at/redir/AQAAAIsYi37eGcOvb32z4ZQcQI2WWCIcIzNfuXGmanDCjUAgLePSdMJaFnzsMHdymwAvwlocfQPFQz-7eOmi0kcbdTir7uYMITAWZMUo_V3T0UGytw-vJG5cvL4VpGnqcicdTob_SZZ30Te5bygLDgEtw17xtNGD_TetbXsCfaIetWOz",
          },
        ],
        picture_url: "https://gzhls.at/i/59/77/3125977-n0.webp?ogircp",
      },
    ],
  },
];
