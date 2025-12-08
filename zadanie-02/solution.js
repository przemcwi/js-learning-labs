function analyzeUsers(users){
    
    if(!Array.isArray(users) || !users.length){
        return{
            activeCount: 0,
            averageAge: 0,
            names: []
        }
    }

    const activeCount =  users.filter(u => u.active).length;
    const averageAge = users.reduce((acc, user) => (acc + user.age), 0) / users.length;
    const names = users.map(u => u.name.toUpperCase());
    return{
        activeCount,
        averageAge,
        names
    };
}
// Lepiej zwracac dane tego samego typu dlatego dla [] powinno byc { activeCount: 0, averageAge: 0, names: [] }
module.exports = analyzeUsers;