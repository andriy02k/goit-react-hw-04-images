import {api} from './api'

export const getAllImages = async (query, page) => {
    const { data } = await api(`?q=${query}&page=${page}&key=40333980-523d7a346ab541add85c41861&image_type=photo&orientation=horizontal&per_page=12`)
    return data;
}