import pluralize from 'pluralize'
import http from '@/services/http/'

export default {
  create (resource, object) {
    return http.post(`/${pluralize(resource)}`, object)
      .then(({ data }) => data)
  },
  read (resource) {
    return http.get(`/${pluralize(resource)}`)
      .then(({ data }) => data)
  },
  read (resource, object) {
    return http.get(`/${pluralize(resource)}/${object.id}`)
      .then(({ data }) => data)
  },
  update (resource, object) {
    return http.put(`/${pluralize(resource)}/${object.id}`, object)
      .then(({ data }) => data)
  },
  delete (resource, object) {
    return http.delete(`/${pluralize(resource)}/${object.id}`)
      .then(({ data }) => data)
  }
}