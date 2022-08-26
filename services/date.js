export const uniqueDate = (tasks) =>{
    const unique = [];
    tasks.forEach((task) => {
        if(!unique.includes(moment(task.dateFormat,'DD/MM/YYYY HH:mm').format('DD/MM/YYYY'))) unique.push(moment(task.dateFormat,'DD/MM/YYYY HH:mm').format('DD/MM/YYYY'));       
    });

    return unique;
}


export const orderDates = (dates) => {
    return dates.sort((a,b) =>{
        const firstDate = moment(a,'DD/MM/YYYY');
        const secondDate = moment(b,'DD/MM/YYYY');
        return firstDate - secondDate;
    });
}
