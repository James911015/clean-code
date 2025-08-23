(() => {

    // función para obtener información de una película por Id
    function getMovieById(id: string) {
        console.log({ id });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieCastById(id: string) {
        console.log({ id });
    }

    // funcion para obtener el bio del actor por el id
    function getBiographyActorById(id: string) {
        console.log({ id });
    }

    // Crear una película
    function createMovie(title: string, description: string, rating: number, cast: string[]) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor(fullName: string, birthdate: Date): boolean {

        // tarea asincrona para verificar nombre
        // ..
        // ..
        if (fullName === 'fernando') return false;

        console.log('Crear actor');
        return true;

    }

    //FuncionEjemplo
  const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
        let result;
        if ( isDead ) {
            result = 1500;
        } else {
            if ( isSeparated ) {
                result = 2500;
            } else {
                if ( isRetired ) {
                    result = 3000;
                } else {
                    result = 4000; 
                }
            }
        }
        
        return result;
    }

    //FuncionEjemploSimplificada
    const getPayAmount2 = ({ isDead = false, isSeperated = true, isRetired = false }): number => {
        let result: number
        if (isDead) return 500;
        if (isSeperated) return 2500;
        return isRetired ? 3000 : 4000
    }

})();
