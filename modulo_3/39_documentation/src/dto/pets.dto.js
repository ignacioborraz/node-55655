export default class PetDTO {
  static getPetInputFrom = (pet) => {
    return {
      name: pet.name || "",
      specie: pet.specie || "",
      image: pet.image || "https://storage.googleapis.com/sharedmedia.playadopt.me/websites/playadoptme/SocialOGKeyArt.png",
      birthDate: pet.birthDate || "12-30-2000",
      adopted: false,
    };
  };
}
