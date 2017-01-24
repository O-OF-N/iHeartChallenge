"use strict";
import axios from 'axios';

export const get = (url, header = null) => header ? axios.get(url, header.toJS()) : axios.get(url);