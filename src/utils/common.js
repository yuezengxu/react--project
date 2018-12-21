
// http://p1.meituan.net/w.h/movie/19efcfbf1a98c02cb5efd69a2edf766e2421917.jpg
// https://p1.meituan.net/128.180/movie/19efcfbf1a98c02cb5efd69a2edf766e2421917.jpg

const getPic = (str)=>{
    let res = "";
    res=str[0]+str[1]+str[2]+str[3]+'s'+str[4]+str[5]+str[6]+str[7]+str[8]+str[9]+str[10]
		+str[11]+str[12]+str[13]+str[14]+str[15]+str[16]+str[17]+str[18]+str[19]+str[20]+
		str[21]+'128'+'.'+"180"+str.slice(25)
   return res;
}

export default {
    getPic
}