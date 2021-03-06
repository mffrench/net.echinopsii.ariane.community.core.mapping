/**
 * Mapping Datastore Blueprints Implementation :
 * provide a Mapping DS domain, repository and service blueprints implementation
 * Copyright (C) 2013  Mathilde Ffrench
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
package net.echinopsii.ariane.community.core.mapping.ds.blueprintsimpl.graphdb;

public class MappingDSGraphDBException extends Exception {

	private static final long serialVersionUID = -5737356297845448334L;
	
	public MappingDSGraphDBException() {
		super();
	}

	public MappingDSGraphDBException(String message) {
        super(message);
    }
	
	public MappingDSGraphDBException(String message, Throwable cause) {
        super(message,cause);
    }
    
    public MappingDSGraphDBException(Throwable cause) {
        super(cause);
    }
    
    protected MappingDSGraphDBException(String message, Throwable cause,
                                        boolean enableSuppression,
                                        boolean writableStackTrace) {
    	super(message, cause, enableSuppression, writableStackTrace);
    }
}
